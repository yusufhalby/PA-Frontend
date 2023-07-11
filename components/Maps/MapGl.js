import React, { useState ,useRef, useEffect, } from 'react'

import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { Marker, Popup } from "react-map-gl";
import geoJson from "./chicago-parks.json";

export const MapGl = () =>
{
  mapboxgl.accessToken =
    "pk.eyJ1IjoibmVibzIyIiwiYSI6ImNsanNhMDA4NTA5aGYzcm1sOXQweDM0NDgifQ.beusneRFyfldfKFovMFPjA";
  // const [lng, setLng] = useState(54.37585762735543);
  // const [lat, setLat] = useState(24.45677614934833);

  // 33.0662 24.0268
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(33.0662);
  const [lat, setLat] = useState(24.0268);
  const [zoom, setZoom] = useState(5);
  


  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // Define the coordinates of the marker
    const markerLngLat = [33.0662, 24.0268];

    // Define the options for the marker
    const markerOptions = {
      color: "#ff0000",
      draggable: false,
      backgroundColor:"54ff89"
    };

    // Create a new marker object with custom options
    const marker = new mapboxgl.Marker(markerOptions)
      .setLngLat(markerLngLat)
      .addTo(map.current);

    // // Create default markers
    // geoJson.features.map((feature) =>
    //   new mapboxgl.Marker(markerOptions)
    //     .setLngLat(feature.geometry.coordinates)
    //     .addTo(map.current)
    // );

    // Add FullscreenControl to map
    map.current?.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // Set the canvas size
    map.current.getCanvas().style.width = "100%";
    map.current.getCanvas().style.height = "100%";
  } ,[lng, lat, zoom,]);



  const setCoordinates = () => {
    const newLng = 33.0662;
    const newLat = 24.0268;
    const newzoom = 5;

    // Check if the map object is defined and initialized
    if (map.current) {
      // Update the state values for longitude and latitude
      setLng(newLng);
      setLat(newLat);
      map.current.setZoom(newzoom);
      // Set the map center to the new coordinates
      map.current.setCenter([newLng, newLat]);
    }
  };

  // create default markers

  //  new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

  // add navigation control


  return (
    <div
      className="relative w-600-px rounded h-600-px"
      style={{ width: "100%", height: "600px", position: "relative" }}
    >
      <div
        style={{
          fontFamily: "monospace",
          zIndex: "1",
          position: "absolute",
          top: "0",
          left: "0",
          margin: "12px",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          className="sidebar"
          style={{
            backgroundColor: "rgba(35, 55, 75, 0.9)",
            color: "#fff",
            padding: "6px 12px",
          }}
        >
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>

        <div
          style={{
            backgroundColor: "rgba(35, 55, 75, 0.9)",
            color: "#fff",
            padding: "6px 12px",
            textTransform: "capitalize",
            cursor: "pointer",
            marginLeft: "-20px",
          }}
          onClick={setCoordinates}
        >
          our lands
        </div>
      </div>

      <div
        ref={mapContainer}
     
      
      ></div>
    </div>
  );
}


