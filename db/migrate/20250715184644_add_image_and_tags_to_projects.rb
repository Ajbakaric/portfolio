class AddImageAndTagsToProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :image, :string
    add_column :projects, :tags, :text  # store as comma-separated string
  end
end
