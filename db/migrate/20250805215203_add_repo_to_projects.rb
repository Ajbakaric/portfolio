class AddRepoToProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :repo, :string
  end
end
