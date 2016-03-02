// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.	
$(document).on("ready", function() {
	var addressRequest = "https://gisws.miamidade.gov/ArcGIS/rest/services/MDC_Locators/MD_Locator/GeocodeServer/findAddressCandidates?SingleLine={{ADDRESS}}&f=json&outSR=%7B%22wkid%22%3A2236%7D&outFields=*";
	  
	var commissionerRequest = "https://gisweb.miamidade.gov/ArcGIS/rest/services/CommunityServices/MD_CommunityServices/MapServer/4/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&geometry=%7B%22x%22%3A{{X}}%2C%22y%22%3A{{Y}}%2C%22spatialReference%22%3A%7B%22wkid%22%3A{{wkid}}%2C%22latestWkid%22%3A{{latestWkid}}%7D%7D&geometryType=esriGeometryPoint&inSR={{wkid}}&outFields=ID%2CCOMMNAME&outSR={{wkid}}";

	var selectedAddressToCall = null;
	var spatialReference = null;

	$('.js-find-commissioner').on('click', function(event){
		event.preventDefault();
		findEverything()
	});

	function findEverything(){
		console.log(event);
		var availableTags = [];
		var response = null;

		$.get( addressRequest.replace("{{ADDRESS}}", document.getElementById("find-user-area").value), function( data ) {
            response = JSON.parse(data);
            availableTags = [];
            console.log(data);
			if(response.candidates.length > 0) {
				selectedAddressToCall = response.candidates[0];
                spatialReference = response.spatialReference;
            }
   			$.get( commissionerRequest.replace("{{X}}", selectedAddressToCall.location.x).replace("{{Y}}", selectedAddressToCall.location.y).replace("{{wkid}}", spatialReference.wkid).replace("{{wkid}}", spatialReference.wkid).replace("{{wkid}}", spatialReference.wkid). replace("{{latestWkid}}", spatialReference.latestWkid)
                       , function(data) {
	        	var comissioner = JSON.parse(data);
		       	
	       		commID=comissioner.features[0].attributes.ID;
	       		pageRedirect(commID); 
    		});
	    });
	};

	function pageRedirect(commissioner_id){
		window.location="commissioners/"+commissioner_id;
	};
});

