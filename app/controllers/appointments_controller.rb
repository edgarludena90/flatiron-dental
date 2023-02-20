class AppointmentsController < ApplicationController
  before_action :authorize, except: [:index]
  # appointments can be viewed by both dentists & patient
  def index
    # get all appointments for a specific patient or dentist
    render json: current_user.appointments.all.order(:location), status: :ok
  end

  def show
    appointment = Appointment.find(params[:id])
    render json: appointment, status: :ok
  end

  def create
    render json: Appointment.create!(appointment_params), status: :created
  end

  def update
    appointment = Appointment.find(params[:id])
    render json: appointment.update!(appointment_params), status: :created
  end

  def destroy
    appointment = Appointment.find(params[:id])
    appointment.destroy
    head :no_content
  end

  private

  def appointment_params
    # added a date for the appointment, and changed table structure to contail the procedure_id 
    params.permit(:id, :location, :notes, :dentist_id, :patient_id, :procedure_id, :date)
  end
end
