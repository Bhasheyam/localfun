/**
 * # AIzaSyAMYkvdmY0vRhAHhibXpP4_HcJuCLOJp1o
 * 53eeb015d61056c54245a909c79862532fc953ad
 * https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=YOUR_API_KEY
 * https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyAMYkvdmY0vRhAHhibXpP4_HcJuCLOJp1o
 * https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyAMYkvdmY0vRhAHhibXpP4_HcJuCLOJp1o
 * CmRaAAAASWR4YMPwR22KxGNUD9Awfa6lhrHnv3wgESL_Q0JsBaYpLy-e7udGVtpV_tctx4Xcr8_Y6qdEitm9lEVq3fS317tltC5p78fZS5r1Vj1YOWeTiGEomW_PiRFps8TKA0ajEhCw5cto-FoLvyIG8SLQQMdEGhSibsoTVybi0B9445EjmewmrJ73fg
 */


function findlocation(location){
	var txt =  document.getElementById("input").value;
	
	
	gapi.load('auth2', function() {
    // Library loaded. 
		});
	var restRequest = gapi.client.request({
		  'path': 'https://maps.googleapis.com/maps/api/place/textsearch/json',
		  'params': {'query' : txt,  'key' : 'AIzaSyAMYkvdmY0vRhAHhibXpP4_HcJuCLOJp1o'}
		});
	console.log(typeof (restRequest))
	//var uurl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+txt+"&key=AIzaSyAMYkvdmY0vRhAHhibXpP4_HcJuCLOJp1o";
	
	
	//console.log(dataloc);
	
}
	