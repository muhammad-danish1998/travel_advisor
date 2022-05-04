import React from 'react'
import axios from "axios";
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {

  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',

  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': '36605ca579msh60a3d63c016a018p153ca8jsnf1c3fadf91cd'
  }
};


export const getPlacesData = async (sw , ne) => {
  try {
    const { data: { data } } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
}

