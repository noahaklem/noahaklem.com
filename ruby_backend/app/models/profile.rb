class Profile < ActiveRecord::Base
    has_many :images
    has_many :projects
    has_many :testimonials
    

    def self.import_from_csv(path)
        CSV.foreach(path, headers: true) do |row|
            create(row.to_h)
        end
    end

    def self.import_from_csv(profile_name, model, path)
        CSV.foreach(path, headers: true) do |row|
            profile = find_by(name: profile_name)
            profile.send(model.to_sym).create(row.to_h) if profile
        end
    end
end