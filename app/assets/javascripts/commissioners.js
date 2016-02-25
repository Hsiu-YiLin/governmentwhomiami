// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.	
var addressRequest = "https://gisws.miamidade.gov/ArcGIS/rest/services/MDC_Locators/MD_Locator/GeocodeServer/findAddressCandidates?SingleLine={{ADDRESS}}&f=json&outSR=%7B%22wkid%22%3A2236%7D&outFields=*";
  
var commisionerRequest = "https://gisweb.miamidade.gov/ArcGIS/rest/services/CommunityServices/MD_CommunityServices/MapServer/4/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&geometry=%7B%22x%22%3A{{X}}%2C%22y%22%3A{{Y}}%2C%22spatialReference%22%3A%7B%22wkid%22%3A{{wkid}}%2C%22latestWkid%22%3A{{latestWkid}}%7D%7D&geometryType=esriGeometryPoint&inSR={{wkid}}&outFields=ID%2CCOMMNAME&outSR={{wkid}}";
  
var selectedAddressToCall = null;
var spatialReference = null;

$(function() {
	var availableTags = [];
    var response = null;
    $( "#find-user-area" ).keyup(function() {
		$.get( addressRequest.replace("{{ADDRESS}}", document.getElementById("find-user-area").value), function( data ) {
            response = JSON.parse(data);
            availableTags = [];
            console.log(data);
			if(response.candidates.length > 0) {
				selectedAddressToCall = response.candidates[0];
                spatialReference = response.spatialReference;
            }
        });
	});

	$( "#find-commissioner" ).click(function() {
		
	console.log(commisionerRequest.replace("{{X}}", selectedAddressToCall.location.x).replace("{{Y}}", selectedAddressToCall.location.y).replace("{{wkid}}", spatialReference.wkid).replace("{{wkid}}", spatialReference.wkid).replace("{{wkid}}", spatialReference.wkid). replace("{{latestWkid}}", spatialReference.latestWkid));

	$.get( commisionerRequest.replace("{{X}}", selectedAddressToCall.location.x).replace("{{Y}}", selectedAddressToCall.location.y).replace("{{wkid}}", spatialReference.wkid).replace("{{wkid}}", spatialReference.wkid).replace("{{wkid}}", spatialReference.wkid). replace("{{latestWkid}}", spatialReference.latestWkid)
                       , function(data) {
        var comissioner = JSON.parse(data);
       	// alert ("Your comissioner is " + comissioner.features[0].attributes.COMMNAME)
    	});

	var commissionerUrl = `/commissioners/7`;

	var html = `
		<a href="${commissionerUrl}">
			See commissioner's profile
		</a>`;

	

	});
});