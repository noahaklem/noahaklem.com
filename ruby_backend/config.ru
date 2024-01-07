# require all config for setup
require './config/environment'

# Configure sinatra (if needed)
puts "config.ru is finished and will start application"

# start the application
run ApplicationController

puts "Application started!"
