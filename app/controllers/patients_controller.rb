class PatientsController < ApplicationController
  before_action :is_den, except: [:create]
  before_action :authorize, except: [:create]

  def index
    render json: Patient.all.order(:name), status: :ok
  end

  def show
    patient = Patient.find(params[:id])
    render json: patient, status: :ok
  end

  def create
    # create a session when the user signs up
    user = Patient.create!(patient_params)
    session[:current_user] = user.id
    render json: user, status: :created
  end

  def destroy
    patient = Patient.find(params[:id])
    patient.destroy
    head :no_content
  end

  private

  def patient_params
    params.permit(:name, :age, :email, :password)
  end
end
  