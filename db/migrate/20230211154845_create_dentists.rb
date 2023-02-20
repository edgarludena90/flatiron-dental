class CreateDentists < ActiveRecord::Migration[6.1]
  def change
    create_table :dentists do |t|
      t.string :title
      t.string :name
      t.string :bio
      t.string :email
      t.string :password_digest
      t.timestamps
    end
  end
end
