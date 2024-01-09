class Project < ActiveRecord::Base
    belongs_to :profile 
    has_many :technologies
    has_many :images

end