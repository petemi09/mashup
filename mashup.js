"use strict;"

function clickedon(){
	let city = document.getElementById("city").value
	let state = document.getElementById("state").value
	let co = document.getElementById("city_output")
	let so = document.getElementById("state_output")

	co.innerHTML = city
	so.innerHTML = state

 	var map;
 	var luther = {lat: 43.3111, lng: -91.8036};
 	map = new google.maps.Map(document.getElementById('map'), {
       	center: luther,
    	zoom: 13
    });
 	var marker = new google.maps.Marker({
        position: luther,
        map: map
        });

 	var map2;
 	var college dr = {lat: 43.3111, lng: -91.8036};
 	map = new google.maps.Map(document.getElementById('map'), {
       	center: college dr,
    	zoom: 13
    });
 	var marker = new google.maps.Marker({
        position: college dr,
        map: map2
        });




    }


    


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
