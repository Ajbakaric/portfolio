class CreateProjects < ActiveRecord::Migration[7.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.string :link
      t.string :image
      t.text :tags
      t.string :repo

      t.timestamps
    end
  end
end
