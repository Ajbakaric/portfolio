class PortfolioController < ApplicationController
  def projects
    render json: [
        {
        title: "Portfolio",
        description: "A browser-based implementation of the classic Battleship game built with vanilla JavaScript. Includes dynamic DOM rendering, modular code architecture, and player vs. computer gameplay logic.",
        link: "https://project-battleship.netlify.app/",
        image: "/images/personal-site.png",

        tags: ["JavaScript", "API"]
      },
      {
        title: "BanterBox",
        description: " A real-time fullstack messaging app built with Ruby on Rails (API backend) and React + Tailwind frontend. Supports authentication, JWT-based sessions, ActionCable WebSockets for live messaging, and a sleek tropical green UI.",
        link: "https://banterbox-fullstack.onrender.com/",
        image: "/images/banterboximg.png",
        tags: ["Rails", "React", "WebSocket"]
      },
      {
        title: "WeatherNow",
        description: "A responsive weather dashboard using JavaScript and the Visual Crossing API. Built to show real-time weather info, temperature conversions, and search by city.",
        link: "https://weathernow-appnow.netlify.app/",
        image: "/images/homepage.png",

        tags: ["JavaScript", "API"]
      },
      {
        title: "Project Battleship",
        description: "A browser-based implementation of the classic Battleship game built with vanilla JavaScript. Includes dynamic DOM rendering, modular code architecture, and player vs. computer gameplay logic.",
        link: "https://project-battleship.netlify.app/",
        image: "/images/battleship.png",

        tags: ["JavaScript", "API"]
    },
    ]
  end
end
