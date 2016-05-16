require './lib/swaggering'
require 'mongo'
require 'sinatra/reloader'
require 'better_errors'

# only need to extend if you want special configuration!
class HomeQuest < Swaggering
  self.configure do |config|
    config.api_version = '0.0.2'
  end

  configure do
    register Sinatra::Reloader

    use BetterErrors::Middleware
    BetterErrors.application_root = settings.root

    set :db, Mongo::Client.new(['localhost:27017'], :database => 'homequest')
  end

  set :public_folder, File.dirname(__FILE__) + '/public'
end

# include the api files
Dir["./api/*.rb"].each { |file|
  require file
}
