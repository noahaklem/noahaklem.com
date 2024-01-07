# set the environment
ENV['RACK_ENV'] ||= "development"

# Require Gems before running
require 'bundler'
Bundle.require(:default, ENV['RACK_ENV'])

# load all files in app
require_all "app"

puts "Environment loaded!"