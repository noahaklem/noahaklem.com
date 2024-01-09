class Testimonial < ActiveRecord::Base
    belongs_to :profile
    has_one :image

end