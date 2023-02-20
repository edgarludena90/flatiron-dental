class ProceduresController < ApplicationController
  # removed pre-existing before_actions
  def index
    render json: Procedure.all, status: :ok
  end
end