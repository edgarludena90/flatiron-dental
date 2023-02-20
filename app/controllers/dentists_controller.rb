class DentistsController < ApplicationController
  before_action :authorize, except: [:index]
  before_action :is_den, except: [:index]
  
  def index
    render json: Dentist.all, status: :ok
  end

  def show
    dentist= Dentist.find(params[:id])
    render json: dentist, status: :ok
  end

end
