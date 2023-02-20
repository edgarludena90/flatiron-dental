class Dentist < ApplicationRecord
  has_secure_password
  has_many :appointments, dependent: :nullify
  has_many :patients, through: :appointments
  has_many :procedures, through: :appointments

  validates :email, presence: true, uniqueness: true
  validates :name, presence: true
  validate :flatiron_email
  def flatiron_email
    unless email.match?(/dentalclinic.med/)
      errors.add(:permitted_emails, ": Must have a dental email.")
    end
end
end
