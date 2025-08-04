class CreateProjects < ActiveRecord::Migration[7.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.string :link
      t.string :image
      t.string :tags

      t.timestamps
    end
    add_index :projects, :title, unique: true
  end
end
