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
                            images: profile.images.map do |image|
                                {
                                    id: image.id,
                                    image_data: Base64.strict_encode64(image.image_data),
                                    description: image.description
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
        end
    end
end