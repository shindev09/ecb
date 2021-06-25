const places = {
    pollutedPlaceOne: {
      center: { lat: 16.473041, lng: 107.421614 },
      acreage: 30000,
    },
    pollutedPlaceTwo: {
      center: { lat: 17.473041, lng: 107.421614 },
      acreage: 2000,
    },
    noPollutedPlaceOne: {
      center: { lat: 16.473041, lng: 105.421614 },
      acreage: 100000,
    },
    noPollutedPlaceTwo: {
     center: { lat: 15.473041, lng: 101.421614 },
      acreage: 603502,
    },
  };
  
  function initMap() {
    // Create the map.
    const myLatlng = { lat: 16.473041, lng: 107.421614 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: myLatlng,
       zoom: 5.9,
    });


    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
      content: "Click the map to get Lat/Lng!",
      position: myLatlng,
    });
    infoWindow.open(map);
    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
    // Close the current InfoWindow.
    infoWindow.close();
    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );
      infoWindow.open(map);
    });
    // Construct the circle for each value in placemap.
    // Note: We scale the area of the circle based on the acreage.
    for (const place in places) {
      // Add the circle for this place to the map.
      const circle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpaplace: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpaplace: 0.35,
        map,
        center: places[place].center,
        radius: Math.sqrt(places[place].acreage) * 100,
      });
    }
    
  }