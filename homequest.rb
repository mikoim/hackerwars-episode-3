require './lib/swaggering'
require 'mongo'

# only need to extend if you want special configuration!
class HomeQuest < Swaggering
	self.configure do |config|
		config.api_version = '0.0.2' 
		@client = Mongo::Client.new([ 'localhost:27017' ], :database => 'homequest')#, :user => 'root', :password => 'abc123')
	end

  before do
		@client = Mongo::Client.new([ 'localhost:27017' ], :database => 'homequest')#, :user => 'root', :password => 'abc123')
  end

  set :public_folder, File.dirname(__FILE__) + '/public'
end

# include the api files
Dir["./api/*.rb"].each { |file|
  require file
}
