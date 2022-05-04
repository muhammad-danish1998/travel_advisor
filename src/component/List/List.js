import { CircularProgress, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import PlaceDetails from '../placeDetails/PlaceDetails';
import useStyles from './style.css';
const List = () => {
  // =============== state for type 
  const [age, setAge] = React.useState('');
  const handleChangeType = (event) => {
    setAge(event.target.value);
  };
  // ============== state for Rating 
  const [rating, setRating] = React.useState('');
  const handleChangeRating = (event) => {
    setRating(event.target.value);
  };
  // ===================== creating place

  const places = [
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
    { name: "Cool Place" },
    { name: "Best Beer" },
    { name: "Best Steak" },
    { name: "Best Beer" },
    { name: "Best Steak" },
    

  ]

  return (
    <>

      <Typography variant="h4" component="h2">
        Restaurants, Hotels & Attractions around you
      </Typography>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChangeType}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Restaurants</MenuItem>
          <MenuItem value={20}>Hotels</MenuItem>
          <MenuItem value={30}>Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={rating}
          onChange={handleChangeRating}
          label="Rating"
        >
          <MenuItem value="">
            <em>Rating</em>
          </MenuItem>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>3.0</MenuItem>
          <MenuItem value={4}>4.0</MenuItem>
          <MenuItem value={4.5}>4.5</MenuItem>

        </Select>
      </FormControl>
      <Grid container spacing={3} >
        {
          places?.map((place, ind) => (
            <Grid item key = {ind} xs ={12}>
              <PlaceDetails place = {place} />
            </Grid>
          ))
        }

      </Grid>

    </>


  )
}

export default List