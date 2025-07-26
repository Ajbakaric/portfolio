projects = [
  {
    title: "Portfolio",
    description: "This project is designed to showcase my skills...",
    link: "https://portfolio-x1ib.onrender.com/",
    image: "/images/personal-site.png",
    tags: "JavaScript, API"
  },
  {
    title: "BanterBox",
    description: "A real-time fullstack messaging app...",
    link: "https://banterbox-fullstack.onrender.com/",
    image: "/images/banterboximg.png",
    tags: "Rails, React, WebSocket"
  },
  {
    title: "WeatherNow",
    description: "A responsive weather dashboard...",
    link: "https://weathernow-appnow.netlify.app/",
    image: "/images/homepage.png",
    tags: "JavaScript, API"
  },
  {
    title: "Project Battleship",
    description: "A browser-based implementation of Battleship...",
    link: "https://project-battleship.netlify.app/",
    image: "/images/battleship.png",
    tags: "JavaScript, API"
  }
]

projects.each do |attrs|
  Project.find_or_create_by!(title: attrs[:title], link: attrs[:link]) do |project|
    project.description = attrs[:description]
    project.image = attrs[:image]
    project.tags = attrs[:tags]
  end
end
