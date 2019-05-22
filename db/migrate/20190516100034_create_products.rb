class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :details
      t.integer :price
      t.boolean :available, :boolean, default: false

      t.timestamps
    end
  end
end
