class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :dentist
  belongs_to :procedure
end
