class AddUniqueIndexToProjectsTitle < ActiveRecord::Migration[7.1]
  def up
    # Skip if the index already exists (works in both PG and SQLite)
    add_index :projects, :title, unique: true unless index_exists?(:projects, :title)
  end

  def down
    remove_index :projects, :title if index_exists?(:projects, :title)
  end
end
