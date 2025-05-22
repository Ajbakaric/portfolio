class PortfolioController < ApplicationController
  def projects
    render json: [
      { title: "BanterBox", description: "Fullstack chat app", link: "https://playful-croissant.netlify.app" },
      { title: "Weather App", description: "Weather app using API", link: "https://github.com/Ajbakaric/weather-app" }
    ]
  end

  def contact
    data = JSON.parse(request.body.read)
    puts "New contact form submission:"
    puts "Name: #{data['name']}, Email: #{data['email']}, Message: #{data['message']}"
    render json: { success: true }
  end
end
