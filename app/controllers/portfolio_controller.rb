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

  def run_seed
    if Rails.env.production?
      load Rails.root.join('db/seeds.rb')
      render plain: "Database seeded!"
    else
      render plain: "Only allowed in production."
    end
  end
end
