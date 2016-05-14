require './lib/swaggering'

# only need to extend if you want special configuration!
class MyApp < Swaggering
  self.configure do |config|
    config.api_version = '0.0.1' 
  end
end

# include the api files
Dir["./api/*.rb"].each { |file|
  require file
}
