require './lib/swaggering'
require 'mongo'
require 'sinatra/contrib'
require 'sinatra/reloader'
require 'better_errors'

# only need to extend if you want special configuration!
class HomeQuest < Swaggering
  def initialize
    super()
    @homequest_tokens = {}
  end

  self.configure do |config|
    config.api_version = '0.0.3'
  end

  configure do
    register Sinatra::Reloader

    use BetterErrors::Middleware
    BetterErrors.application_root = settings.root

    set :db, Mongo::Client.new(['localhost:27017'], :database => 'homequest')
    settings.db['parent'].indexes.create_one({:email => 1}, :unique => true)
  end

  helpers do
    def search_children(key, value)
      parents = settings.db['parent'].find({"children.#{key}" => value}).projection({_id: 0}).to_a

      if parents.empty?
        return []
      end
        return parents.map {|p| p['children']}.flatten.select {|v| v[key] == value}
    end

    def search_child(key, value)
      children = search_children(key, value)

      if children.length > 1
        raise 'something went wrong'
      end

      return children.first
    end

    def search_parents(key, value)
      return settings.db['parent'].find({key => value}).projection({_id: 0}).to_a
    end

    def search_parent(key, value)
      parents = search_parents(key, value)

      if parents.length > 1
        raise 'something went wrong'
      end

      return parents.first
    end

    def message(text)
      json :message => text
    end

  end

  set :public_folder, File.dirname(__FILE__) + '/public'

  get '/swagger-ui/*' do |path|
    if path.empty?
      path = 'index.html'
    end

    send_file(File.join('swagger-ui/dist/', path))
  end

  class Error
    class InvalidCredential < Exception
    end
  end
end

# include the api files
Dir["./api/*.rb"].each { |file|
  require file
}
