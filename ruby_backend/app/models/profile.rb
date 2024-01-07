class Profile < ActiveRecord::Base
    has_many :images
    has_many :projects
    has_many :testimonials
    
end