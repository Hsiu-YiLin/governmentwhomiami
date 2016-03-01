class CommissionersController < ApplicationController
	def show
		@commissioner = Commissioner.find_by(district_id: params[:district_id])
		@commID = @commissioner.district_id
		@commPicURL = "commissioners/#{@commID}.jpg"
		@commAboutText = File.read("app/assets/abouttxt/#{@commID}.txt").html_safe
		# IO.binread("#{@commID}.txt")
	end

	def search
		user_address=params[:user_address]
		user_address.inspect
		# Use JS to find commissioner
		redirect_to commissioners_path(commID)
	end
end