# app/controllers/portfolio_controller.rb
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
          tags: p.tags.is_a?(String) ? p.tags.split(',').map(&:strip) : Array(p.tags)
        }
      }
    else
      # Fallback if DB is empty
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

  # If you want to keep a manual seeding endpoint, leave this;
  # otherwise you can remove it for safety.
  def run_seed
    if Rails.env.production?
      load Rails.root.join('db/seeds.rb')
      render plain: "Database seeded!"
    else
      render plain: "Only allowed in production."
    end
  end
end
