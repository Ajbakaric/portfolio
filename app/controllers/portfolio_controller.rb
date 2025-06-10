class PortfolioController < ApplicationController
  def projects
    render json: [
      {
        title: "BanterBox",
        description: "A fullstack real-time chat app using Rails & React.",
        link: "https://banterbox.example.com",
        image: "https://placehold.co/600x400?text=BanterBox",
        tags: ["Rails", "React", "WebSocket"]
      },
      {
        title: "WeatherNow",
        description: "Weather dashboard using the OpenWeather API.",
        link: "https://weathernow.example.com",
        image: "https://placehold.co/600x400?text=WeatherNow",
        tags: ["JavaScript", "API"]
      },
      {
        title: "Portfolio Site",
        description: "This very site! Built with React + Tailwind + Rails API.",
        link: "https://yoursite.netlify.app",
        image: "https://placehold.co/600x400?text=Portfolio",
        tags: ["React", "Tailwind", "Ruby"]
      }
    ]
  end
end
