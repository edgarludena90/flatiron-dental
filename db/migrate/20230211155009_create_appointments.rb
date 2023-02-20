class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.references :patient, null: false, foreign_key: true
      t.references :dentist, null: false, foreign_key: true
      t.references :procedure, null: false, foreign_key: true
      t.string :location
      t.text :notes
      t.date :date
      t.timestamps
    end
  end
end
