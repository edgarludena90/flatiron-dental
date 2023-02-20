class Patient < ApplicationRecord
  has_secure_password

  has_many :appointments, dependent: :nullify
  has_many :dentists, through: :appointments
  has_many :procedures, through: :appointments

  validates :email, presence: true, uniqueness: true
  validates :name, presence: true
  validates :age, numericality: { greater_than_or_equal_to: 18 }
  
end
