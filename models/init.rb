require 'mongo'

require_relative 'user'
require_relative 'child'
require_relative 'parent'

Mongo::Client.new([ 'localhost:27017' ], :database => 'mydb')
