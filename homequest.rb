# frozen_string_literal: true
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

  configure do |config|
    config.api_version = '0.0.3'
  end

  configure do
    register Sinatra::Reloader

    use BetterErrors::Middleware
    BetterErrors.application_root = settings.root

    set :db, Mongo::Client.new(['localhost:27017'], database: 'homequest')
    settings.db['parent'].indexes.create_one({ email: 1 }, unique: true)
  end

  helpers do
    def search_children(key, value)
      parents = settings.db['parent'].find("children.#{key}" => value).projection(_id: 0).to_a

      return [] if parents.empty?
      parents.map { |p| p['children'] }.flatten.select { |v| v[key] == value }
    end

    def search_child(key, value)
      children = search_children(key, value)

      raise 'something went wrong' if children.length > 1

      children.first
    end

    def search_parents(key, value)
      settings.db['parent'].find(key => value).projection(_id: 0).to_a
    end

    def search_parent(key, value)
      parents = search_parents(key, value)

      raise 'something went wrong' if parents.length > 1

      parents.first
    end

    def inject_task_state(task, user_uuid)
      if task['verified_child'].include?(user_uuid)
        task['is_accepted'] = true
        task['is_completed'] = true
        task['is_verified'] = true
      elsif task['completed_child'].include?(user_uuid)
        task['is_accepted'] = true
        task['is_completed'] = true
        task['is_verified'] = false
      elsif task['accepted_child'].include?(user_uuid)
        task['is_accepted'] = true
        task['is_completed'] = false
        task['is_verified'] = false
      else
        task['is_accepted'] = false
        task['is_completed'] = false
        task['is_verified'] = false
      end
    end

    def message(text)
      json message: text
    end
  end

  set :public_folder, File.dirname(__FILE__) + '/public'

  get '/swagger-ui/*' do |path|
    path = 'index.html' if path.empty?

    send_file(File.join('swagger-ui/dist/', path))
  end

  class Error
    class InvalidCredential < Exception
    end
  end
end

# include the api files
Dir['./api/*.rb'].each do |file|
  require file
end
