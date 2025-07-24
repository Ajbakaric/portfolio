class PortfolioController < ApplicationController
  def projects
    projects = Project.all

    Rails.logger.info "Projects count: #{projects.count}"

    if projects.any?
      render json: projects.map { |p|
        {
          title: p.title,
          description: p.description,
          link: p.link,
          image: p.image,
          tags: p.tags&.split(',').map(&:strip)  # safely split tags string into array
        }
      }
    else
      # Dummy fallback project if DB is empty
      render json: [
        {
          title: "Test Project",
          description: "This is a fallback project because your database is empty.",
          link: "https://example.com",
          image: "https://via.placeholder.com/600x400",
          tags: ["Rails", "React", "Tailwind"]
        }
      ]
    end
  end

  def run_seed
    if Rails.env.production?
      load Rails.root.join('db/seeds.rb')
      render plain: "Database seeded!"
    else
      render plain: "Only allowed in production."
    end
  end
end
Project.create!(
  title: "Portfolio",
  description: "This project is designed to showcase my skills as a Fullstack Developer & Creative Technologist and highlight selected projects, technologies, and contact options all wrapped in a modern, interactive UI with custom animations and 3D effects.",
  link: "https://project-battleship.netlify.app/",
  image: "/images/personal-site.png",
  tags: "JavaScript, API"
)

Project.create!(
  title: "BanterBox",
  description: "A real-time fullstack messaging app built with Ruby on Rails (API backend) and React + Tailwind frontend. Supports authentication, JWT-based sessions, ActionCable WebSockets for live messaging, and a sleek tropical green UI.",
  link: "https://banterbox-fullstack.onrender.com/",
  image: "/images/banterboximg.png",
  tags: ["Rails", "React", "WebSocket"]
)

Project.create!(
  title: "WeatherNow",
  description: "A responsive weather dashboard using JavaScript and the Visual Crossing API. Built to show real-time weather info, temperature conversions, and search by city.",
  link: "https://weathernow-appnow.netlify.app/",
  image: "/images/homepage.png",
  tags: "JavaScript, API"
)

Project.create!(
  title: "Project Battleship",
  description: "A browser-based implementation of the classic Battleship game built with vanilla JavaScript. Includes dynamic DOM rendering, modular code architecture, and player vs. computer gameplay logic.",
  link: "https://project-battleship.netlify.app/",
  image: "/images/battleship.png",
  tags: "JavaScript, API"
)
