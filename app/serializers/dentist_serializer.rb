class DentistSerializer < ActiveModel::Serializer
  attributes :id, :title, :name, :bio, :email, :total_appts

  def total_appts
    object.appointments.size
  end
end
