"use strict;"
var map;
var infowindow;
var lati;
var long;


function initMap(){ 	
    var Decorah = {lat: 43.3111, lng: -91.8036};
    var map = new google.maps.Map(document.getElementById('map'), {
       	zoom: 13,
        center: Decorah
       });
    }


function clickedon1() {

	let city = document.getElementById("city").value
	let state = document.getElementById("state").value

	let lo = document.getElementById("location")

	lo.innerHTML = city + ", " + state

	let location = city + ", " + state

	

	var geocoder =  new google.maps.Geocoder();
    geocoder.geocode( { 'address': location}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
          	lati = results[0].geometry.location.lat();
            long = results[0].geometry.location.lng();
            var pyrmont = {lat: lati, lng: long};

			map = new google.maps.Map(document.getElementById('map'), {
				center: pyrmont,
			    zoom: 13
			  });

			infowindow = new google.maps.InfoWindow();
			var service = new google.maps.places.PlacesService(map);
			service.nearbySearch({
				location: pyrmont,
			    radius: 5000,
			    type: ['restaurant']
	  		}, callback);
          } else {
            alert("Something got wrong " + status);
          }
        });

	}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}


 	//var marker = new google.maps.Marker({
    //    position: luther,
    //    map: map
    //    });


    


	// var map;

	// function initMap() {
	//   // Create a map centered in Pyrmont, Sydney (Australia).
	//   map = new google.maps.Map(document.getElementById('map'), {
	//     center: {lat: -33.8666, lng: 151.1958},
	//     zoom: 15
	//   });

	//   // Search for Google's office in Australia.
	//   var request = {
	//     location: map.getCenter(),
	//     radius: '500',
	//     query: "Google Sydney"
	// }

	//   var service = new google.maps.places.PlacesService(map);
	//   service.textSearch(request, callback);
	// }

	// // Checks that the PlacesServiceStatus is OK, and adds a marker
	// // using the place ID and location from the PlacesService.
	// function callback(results, status) {
	//   if (status == google.maps.places.PlacesServiceStatus.OK) {
	//     var marker = new google.maps.Marker({
	//       map: map,
	//       place: {
	//         placeId: results[0].place_id,
	//         location: results[0].geometry.location
	//       }
	//     });
	//   }
	// }