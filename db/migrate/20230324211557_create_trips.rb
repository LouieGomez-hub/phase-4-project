class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :location
      t.integer :price
      t.float :rating
      t.text :description

      t.timestamps
    end
  end
end
