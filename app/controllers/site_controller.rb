class SiteController < ApplicationController
	def home
		@commissionerHere = Commissioner.find_by(district_id: 1)
	end

end
