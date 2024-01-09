# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_01_07_202211) do
  create_table "images", force: :cascade do |t|
    t.binary "image_data"
    t.integer "profile_id"
    t.string "description"
    t.index ["profile_id"], name: "index_images_on_profile_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.string "name"
    t.string "url_path"
    t.string "tagline"
    t.text "about"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.text "scope"
    t.text "description"
    t.integer "profile_id"
    t.index ["profile_id"], name: "index_projects_on_profile_id"
  end

  create_table "testimonials", force: :cascade do |t|
    t.text "review"
    t.string "reviewer"
    t.integer "profile_id"
    t.integer "image_id"
    t.index ["image_id"], name: "index_testimonials_on_image_id"
    t.index ["profile_id"], name: "index_testimonials_on_profile_id"
  end

  add_foreign_key "images", "profiles"
  add_foreign_key "projects", "profiles"
  add_foreign_key "testimonials", "images"
  add_foreign_key "testimonials", "profiles"
end
