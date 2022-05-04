import React, { Component } from 'react'

import GoogleMapReact from 'google-map-react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ContactlessOutlined } from '@material-ui/icons';


const Map = ({setCoordinates,setBounds,coordinates}) => {
  const isMobile = useMediaQuery('(min-width:600px)');

  const AnyReactComponent = ({ text }) => <div>{text}</div>
 



  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCvsvOMr_pFzLskpaW_PxzPeui4olKr6s0' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e)=>{
          console.log(e);
          setCoordinates({lat: e.center.lat, lng: e.center.lng});
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});

        }}
        onChildClick={''}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker1"
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map