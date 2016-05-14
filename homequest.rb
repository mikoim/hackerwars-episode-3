require './lib/swaggering'

# only need to extend if you want special configuration!
class HomeQuest < Swaggering
  self.configure do |config|
    config.api_version = '0.0.1' 
  end

  set :public_folder, File.dirname(__FILE__) + '/public'
end

# include the api files
Dir["./api/*.rb"].each { |file|
  require file
}
