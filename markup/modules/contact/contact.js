// Инициализация Google Maps

var map;

function initMap() {
	var myLatlng = new google.maps.LatLng(55.7266365, 37.5838476);
	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatlng,
		zoom: 15,
		scrollwheel: false,
		styles: [{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#444444"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [{
				"color": "#f2f2f2"
			}]
		}, {
			"featureType": "poi",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road",
			"elementType": "all",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": 45
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "transit",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "water",
			"elementType": "all",
			"stylers": [{
				"color": "#273f5a"
			}, {
				"visibility": "on"
			}]
		}]
	});

	var image = {
		url: 'static/img/content/map-mark.png',
		// This marker is 20 pixels wide by 32 pixels high.
		size: new google.maps.Size(33, 43),
		// The origin for this image is (0, 0).
		origin: new google.maps.Point(0, 0),
		// The anchor for this image is the base of the flagpole at (0, 32).
		anchor: new google.maps.Point(0, 32)
	};

	var marker = new google.maps.Marker({
		position: myLatlng,
		title: "Мокской Риф",
		icon: image
	});

	marker.setMap(map);

	// var content = document.createElement('div');
	// content.innerHTML = "Мокской Риф";
	// var infowindow = new google.maps.InfoWindow({
	// 	content: content,
	// 	maxWidth: 800
	// });
	//
	// google.maps.event.addListener(marker, 'click', function () {
	// 	infowindow.open(map, marker);
	// });
}
