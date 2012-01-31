var directionDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

var apartment_location = new google.maps.LatLng(52.518832, 7.337204);

function initialize()
{
	directionsDisplay = new google.maps.DirectionsRenderer();
	var latlng = new google.maps.LatLng(-34.397, 150.644);

	var myOptions = {
		zoom: 13,
		center: apartment_location,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById("directions"));

	var infowindow = new google.maps.InfoWindow({
	    content: "<b>Ferienwohnung \"Unter Eichen\"</b><br />Am Strootbach 7a<br />49809 Lingen"
	});

	var marker = new google.maps.Marker({
	    position: apartment_location,
	    map: map,
	    title: 'Ferienwohnung "Unter Eichen"'
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}

function calculate_route()
{
	var start = document.getElementById("address").value;

	var request = {
		origin: start,
		destination: "Am Strootbach 7a, 49809 Lingen, GERMANY",
		travelMode: google.maps.DirectionsTravelMode.DRIVING
	};

	directionsService.route(request, function(result, status) {
		if (status == google.maps.DirectionsStatus.OK)
			directionsDisplay.setDirections(result);
	});
}

google.maps.event.addDomListener(window, 'load', initialize);