import React from 'react'

export const NewCoordinates = (props) => {

let lng = props.data[0]
let lat = props.data[1];
let zoom = props.data[2];

  return (
      <div>
          <div style={{
              backgroundColor: "rgba(35, 55, 75, 0.9)",
              color: "#fff",
              padding: "6px 12px",
              marginTop: "10px",
              marginLeft: "10px",
              position: "absolute"
          }}>
            Langitude : {lng} | Latitude : {lat} | Zoom : {zoom}
          </div>
      </div>
  )
}
