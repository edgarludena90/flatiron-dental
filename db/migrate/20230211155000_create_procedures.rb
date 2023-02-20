class CreateProcedures < ActiveRecord::Migration[6.1]
  def change
    create_table :procedures do |t|
     t.string :name
     t.integer :price
     t.timestamps
    end
  end
end
