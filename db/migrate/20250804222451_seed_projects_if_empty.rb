# db/migrate/XXXXXXXXXXXXXX_seed_projects_if_empty.rb
class SeedProjectsIfEmpty < ActiveRecord::Migration[7.1]
  def up
    # Only seed if the table truly has no rows
    return if ActiveRecord::Base.connection.select_value("SELECT COUNT(*) FROM projects").to_i > 0

    # Ensure the model is loaded
    require Rails.root.join("app/models/project")

    # Run idempotent seeds (uses find_or_create_by!)
    load Rails.root.join("db/seeds.rb")
  end

  def down
    # keep the data; nothing to roll back
  end
end
