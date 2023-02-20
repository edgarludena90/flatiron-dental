class FallbackController < ActionController::Base
  def index
    # prevent server crush on visiting unexisting route (in routes)
    render file: 'public/index.html'
  end
end