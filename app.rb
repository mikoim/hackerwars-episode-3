require 'sinatra'
require 'mongo'
require 'json'



before do
  @client = Mongo::Client.new([ 'localhost:27017' ], :database => 'homequest')#, :user => 'root', :password => 'abc123')
end

# GET /v1/task : すべてのクエストを取る

get '/v1/task' do
  @tasks = Array.new
  content_type :json
  @client[:tasks].find.each do |document|
    @tasks << document
  end
  @tasks.to_json
end

post '/v1/task' do

end

delete '/v1/task/:uuid' do
  @client.find(:uuid => params[:uuid]).each do |document|
    
  end
end

