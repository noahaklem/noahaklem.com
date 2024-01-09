class CreateProjects < ActiveRecord::Migration[7.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :scope
      t.text :description
      t.references :profile, foreign_key: true

    end
  end
end
