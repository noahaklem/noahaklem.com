module Api
    module V1
        class ProfileController < ApplicationController
            get '/api/v1/:name' do
                profile = Profile.find_by(name: params[:name])
                if profile
                    json_response = profile.map do |p|
                        {
                            id: p.id,
                            name: p.name,
                            url_path: p.url_path,
                            tagline: p.tagline,
                            about: p.about,
                            images: profile.images.map do |image|
                                {
                                    id: image.id,
                                    image_data: Base64.strict_encode64(image.image_data),
                                    description: image.description
                                }
                            end,
                            projects: profile.projects.map do |project|
                                {
                                    id: project.id,
                                    scope: project.scope,
                                    description: project.description,
                                    images: project.images.map do |image|
                                        {
                                            id: image.id,
                                            image_data: Base64.strict_encode64(image.image_data),
                                            description: image.description,
                                        }
                                    end,
                                }
                            end,
                            testimonials: profile.testimonials.map do |testimony|
                                {
                                    id: testimony.id,
                                    review: testimony.review,
                                    reviewer: testimony.reviewer,
                                    image: testimony.image,
                                }
                            end,
                            created_at: p.created_at,
                            updated_at: p.updated_at
                        }
                    end
                else
                    json_response = {
                        message: "Invalid profile name.",
                    }   
                end

                content_type :json 
                json_response.to_json
            end

            get '/api/v1/:name/projects' do
                profile = Profile.find_by(name: params[:name])
                if profile
                    json_response = {
                        message: "We found it but this isn't build quite yet!"
                    }
                else
                    json_response = {
                        message: "Hmm, I couldn't find that profile."
                    }
                end
                content_type :json
                json_response.to_json
            end
        end
    end
end