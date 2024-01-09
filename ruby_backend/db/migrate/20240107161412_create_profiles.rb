class CreateProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :url_path
      t.string :tagline
      t.text :about
      
      t.timestamps
    end
  end
end
