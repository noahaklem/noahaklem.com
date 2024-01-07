class Project < ActiveRecord::Base
    belongs_to :profile 
    has_many :images

end