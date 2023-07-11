import * as React from "react";
import Map, {
  NavigationControl,
  Marker,
  FullscreenControl,
  Popup,
} from "react-map-gl";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import geoJson from "./chicago-parks.json";
import { NewCoordinates } from "./Coordinates";
import { left } from "@popperjs/core";
import Link from "next/link";

function MyMap(props) {
  const [lng, setLng] = React.useState(33.0662);
  const [lat, setLat] = React.useState(24.0268);
  const [zoom, setZoom] = React.useState(5);

  const [selectedMarker, setSelectedMarker] = React.useState(null);

  const myLands = props.data;

  const handleMarkerClick = (event, feature) => {
    // Set the selected marker to the clicked marker
    setSelectedMarker(feature);
  };

  const handlePopupClose = () => {
    // Clear the selected marker when the popup is closed
    setSelectedMarker(null);
  };

  const GoToOurLands = () => {
    setLng(33.0662);
    setLat(24.0268);
    setZoom(5);
  };

  return (
    <div>
      <div>
        <Map
          mapLib={maplibregl}
          initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: zoom,
          }}
          style={{ width: "100%", height: " calc(100vh - 77px)" }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=M7cbMBsaYQDxutHOUsnK"
        >
          <NavigationControl position="top-right" />
          <FullscreenControl position="top-right" />

          <NewCoordinates data={[lng, lat, zoom]} position="top-left" />
          {myLands &&
            myLands.lands.map((land) => (
              <Marker
                key={land._id}
                longitude={land.coordinates[0]}
                latitude={land.coordinates[1]}
                color="#61dbfb"
                style={{ cursor: "pointer" }}
                onClick={(event) => handleMarkerClick(event, land)}
              />
            ))}

          {selectedMarker && (
            <div>
              <Popup
                longitude={selectedMarker.coordinates[0]}
                latitude={selectedMarker.coordinates[1]}
                closeButton={true}
                closeOnClick={false}
                onClose={handlePopupClose}
                className="popup"
              >
                <div>
                  <div className="capitalize">land id : {selectedMarker._id}</div>
                  <br />
                  <h4>Marker Coordinates</h4>
                  <p>Longitude: {selectedMarker.coordinates[0]}</p>
                  <p>Latitude: {selectedMarker.coordinates[1]}</p>
                  <br />
                  <Link
                    className="popup-details-button"
                    href="/admin/dashboard/"
                  >
                    see details
                  </Link>
                </div>
              </Popup>
            </div>
          )}

          <div
            style={{
              backgroundColor: "rgba(35, 55, 75, 0.9)",
              color: "#fff",
              padding: "6px 12px",
              marginTop: "10px",
              marginLeft: "10px",
              position: "absolute",
              top: "50px",
              textTransform: "capitalize",
              left: "0",
              cursor: "pointer",
            }}
            onClick={GoToOurLands}
          >
            our lands
          </div>
        </Map>
      </div>
    </div>
  );
}

export default MyMap;
