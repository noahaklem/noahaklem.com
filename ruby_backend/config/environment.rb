# set the environment
ENV['RACK_ENV'] ||= "development" 

puts "RACK_ENV value is: #{ENV['RACK_ENV']}"

# Require Gems before running
Bundler.require(:default, ENV['RACK_ENV'])

# load all files in app
require_all 'app'

puts "Environment loaded!" 