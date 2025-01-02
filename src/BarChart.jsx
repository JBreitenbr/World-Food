import {useState, useEffect} from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box,Typography,Select,MenuItem  } from "@mui/material";
export default function MyStackedBarChart() {
  const [proteins, setProteins] = useState([]);
  const [country, setCountry]= useState("Germany");
  const [countries, setCountries]= useState([]);
const handleChange=(e)=> {
  setCountry(e.target.value)
  }
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/stacked.json')
    .then(res => res.json())
    .then(data => setProteins(data[country]))
  },[country])
    
    useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/comm.json')
    .then(res => res.json())
    .then(data => setCountries(Object.keys(data)))
  },[])
  return (<Box><Select
    id="country-select"
    value={country}
    label="Country"
    onChange={handleChange}
    sx={{backgroundColor:"#f5f5f5",width:"100%"}}
  >{countries.map((country,index)=><MenuItem key={index} value={country}>{country}</MenuItem>)}
  </Select>
    <BarChart
      dataset={proteins}
      xAxis={[{ 
          scaleType: 'band', 
          dataKey: "Year", 
          tickLabelStyle: {
            angle: 20,
            textAnchor: 'start',
            fontSize: 14,
        },
        }]}
      series={[
    { dataKey: 'Vegetal Products', stack: 'proteins',label:"Vegetal Products",color:"#7fc97f"},
    { dataKey: 'Fish and seafood', stack: 'proteins',label:"Fish and seafood",color:"#a6cee3"},
    { dataKey: 'Meat, total', stack: 'proteins',label:"Meat, total",color:"#fb9a99"},
    { dataKey: 'All egg products', stack: 'proteins',label:"All egg products",color:"#fdc086"},
    { dataKey: 'Milk', stack: 'proteins',label:"Milk",color:"#ffff99" }
  ]}
      sx={{marginTop:"20px"}}
      width = {350}
      height = {370}

    /></Box>
  );
}