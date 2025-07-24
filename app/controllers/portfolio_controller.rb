class PortfolioController < ApplicationController
  def projects
    projects = Project.all

    Rails.logger.info "Projects count: #{projects.count}"

    render json: projects.map { |p|
      {
        title: p.title,
        description: p.description,
        link: p.link,
        image: p.image,
        tags: p.tags&.split(',').map(&:strip)  # safely split tags string into array
      }
    }
  end

  def run_seed
    if Rails.env.production?
      load Rails.root.join('db/seeds.rb')
      render plain: "Database seeded!"
    else
      render plain: "Only allowed in production."
    end
  end

  def wipe_projects
    if Rails.env.production?
      Project.destroy_all
      render plain: "All projects wiped!"
    else
      render plain: "Only allowed in production."
    end
  end
end
