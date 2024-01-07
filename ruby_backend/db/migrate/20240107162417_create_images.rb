class Images < ActiveRecord::Migration[7.1]
  def change
    create_table :images do |t|
      t.binary :image_data
      t.references :profile, foreign_key: true
      t.string :description
      
    end
  end
end
