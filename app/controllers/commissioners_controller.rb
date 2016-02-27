class CommissionersController < ApplicationController
	def show
		
	end

	def search
		addressRequest = "https://gisws.miamidade.gov/ArcGIS/rest/services/MDC_Locators/MD_Locator/GeocodeServer/findAddressCandidates?SingleLine={{ADDRESS}}&f=json&outSR=%7B%22wkid%22%3A2236%7D&outFields=*"
		commissionerRequest = "https://gisweb.miamidade.gov/ArcGIS/rest/services/CommunityServices/MD_CommunityServices/MapServer/4/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&geometry=%7B%22x%22%3A{{X}}%2C%22y%22%3A{{Y}}%2C%22spatialReference%22%3A%7B%22wkid%22%3A{{wkid}}%2C%22latestWkid%22%3A{{latestWkid}}%7D%7D&geometryType=esriGeometryPoint&inSR={{wkid}}&outFields=ID%2CCOMMNAME&outSR={{wkid}}"

		user_address=params[:user_address]
		
		user_address.inspect

		# Use JS to find commissioner
		redirect_to :show
	end
end
