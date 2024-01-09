# require all config for setup
require './config/environment'

# Configure sinatra (if needed)
# configure :development do
#     set :database, 'sqlite3:db/development.sqlite3'
# end

puts "config.ru is finished and will start application"

# start the application
run ApplicationController

puts "Application started!"  
