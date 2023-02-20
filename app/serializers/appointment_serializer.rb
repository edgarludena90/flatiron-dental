class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :location, :notes, :dentist_id, :patient_id, :patient
  
  def patient
    object.patient.name
  end
end
