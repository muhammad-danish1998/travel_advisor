import React, { useState, useEffect } from 'react'
import Header from './component/Header/Header'
import List from './component/List/List'
import Map from './component/Map/Map'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { getPlacesData } from './api/index'

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null)

   useEffect(()=>{
  navigator.geolocation.getCurrentPosition(({coords: {latitude,longitude}})=>{
  setCoordinates({lat:latitude, lng: longitude})
  })
   },[])

  useEffect(() => {
    console.log("danish")
    getPlacesData()
      .then((data) => {
        console.log(data);
        setPlaces(data)
      })
  }, [coordinates,bounds])
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div>

      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }} >
        <Grid item xs={12} lg={4}>
          <Item>
            <List />
          </Item>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Item>
            <Map 
            setCoordinates = {setCoordinates}
            setBounds = {setBounds}
            coordinates = {coordinates}
             />
          </Item>
        </Grid>
      </Grid>

    </div>
  )
}

export default App