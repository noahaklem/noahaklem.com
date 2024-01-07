class CreateTestimonials < ActiveRecord::Migration[7.1]
  def change
    create_table :testimonials do |t|
      t.text :review
      t.string :reviewer
      t.references :profile, foreign_key: true
      t.references :image, foreign_key: true
      
    end
  end
end
