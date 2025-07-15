class PortfolioController < ApplicationController
  def projects
    render json: Project.all.map do |p|
      {
        title: p.title,
        description: p.description,
        link: p.link,
        image: p.image,
        tags: p.tags&.split(',').map(&:strip)  # safely split tags string into array
      }
    end
  end
end
