class ApplicationController < ActionController::API
  include ActionController::Cookies
  # removed pre-existing before_action calls
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  def current_user
    # used a role key value pair in the headers of request to check for email in either patients or dentist table
    request.headers["role"] === "dentist"?
    Dentist.find_by(id: session[:current_user]) : Patient.find_by(id: session[:current_user])
  end

  def authorize
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless current_user
  end
  
  def is_den
    return render json: { error: "Not Authorized" }, status: :unauthorized unless current_user
  end

  private

  def record_invalid_response(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def record_not_found(notfound)
    render json: {error: "#{notfound.model} not found"}, status: :not_found
  end

end

