Project.find_or_create_by(title: "Portfolio") do |p|
  p.description = "This project is designed to showcase my skills as a Fullstack Developer & Creative Technologist..."
  p.link = "https://portfolio-x1ib.onrender.com/"
  p.image = "/images/personal-site.png"
  p.tags = "JavaScript, API"
end

Project.find_or_create_by(title: "BanterBox") do |p|
  p.description = "A real-time fullstack messaging app built with Ruby on Rails and React..."
  p.link = "https://banterbox-fullstack.onrender.com/"
  p.image = "/images/banterboximg.png"
  p.tags = "Rails, React, WebSocket"
end

Project.find_or_create_by(title: "WeatherNow") do |p|
  p.description = "A responsive weather dashboard using JavaScript and the Visual Crossing API..."
  p.link = "https://weathernow-appnow.netlify.app/"
  p.image = "/images/homepage.png"
  p.tags = "JavaScript, API"
end

Project.find_or_create_by(title: "Project Battleship") do |p|
  p.description = "A browser-based implementation of the classic Battleship game..."
  p.link = "https://project-battleship.netlify.app/"
  p.image = "/images/battleship.png"
  p.tags = "JavaScript, API"
end
