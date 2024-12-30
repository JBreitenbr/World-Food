import React, { useState,useEffect } from "react";
import { Box,Typography,Select,MenuItem  } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const yLabels = [1000,2000,3000,3700];

const Chart2 = () => {
const [country,setCountry]=useState("Germany")
const [countries,setCountries]=useState([])
const handleChange=(e)=> {
  setCountry(e.target.value)
}
const [othComm,setOthComm]=useState([])
const [sugar,setSugar]=useState([])
const [pulses, setPulses] = useState([]);
const [meat, setMeat] = useState([]);
const [oils, setOils] = useState([]);
const [fruits, setFruits] = useState([]);
const [dairy, setDairy] = useState([]);
const [years, setYears] = useState([]);  
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/comm.json')
    .then(res => res.json())
    .then(data => setOthComm(data[country]["Other commodities"]))
  },[country])
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/comm.json')
    .then(res => res.json())
    .then(data => setOils(data[country]["Oils and fats"]))
  },[country])
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/comm.json')
    .then(res => res.json())
    .then(data => setFruits(data[country]["Fruits and vegetables"]))
  },[country])
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/comm.json')
    .then(res => res.json())
    .then(data => setSugar(data[country]["Sugar"]))
  },[country])
    useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/comm.json')
    .then(res => res.json())
    .then(data => setDairy(data[country]["Dairy and eggs"]))
  },[country])
    useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/comm.json')
    .then(res => res.json())
    .then(data => setCountries(Object.keys(data).slice(1,Object.keys(data).length)))
  },[])
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/comm.json')
    .then(res => res.json())
    .then(data => setPulses(data[country]["Pulses"]))
  },[country])
    useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/comm.json')
    .then(res => res.json())
    .then(data => setMeat(data[country]["Meat"]))
  },[country])
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/comm.json')
    .then(res => res.json())
    .then(data => setYears(data["Years"]))
  },[])
  
  return (   
      <Box className="performance-chart">{/*<Typography>Daily caloric supply derived from carbohydrates, protein and fat, 1992-2021</Typography>*/ }<Select
    id="country-select"
    value={country}
    label="Country"
    onChange={handleChange}
    sx={{backgroundColor:"#f5f5f5",width:"100%"}}
  >{countries.map((country,index)=><MenuItem key={index} value={country}>{country}</MenuItem>)}
  </Select>
        <LineChart
          width={370}
          height={250}
          series={[
            {
              type: "line",
              data: othComm,
              label: "Other",
              area: true,
              color:"#beaed4",
              showMark: false,
              stack: "stack",
            },
            {
              type: "line",
              data: fruits,
              label: "Fruits and vegetables",
              area: true,
              color:"darkgreen",
              showMark: false,
              stack: "stack",
            },
           {
              type: "line",
              data: pulses,
              label: "Pulses",
              color:"#66c2a5",
              area: true,
              showMark: false,
              stack: "stack",
            },
            {
              type: "line",
              data: dairy,
              label: "Dairy and eggs",
              color:"#ffff99",
              area: true,
              showMark: false,
              stack: "stack",
            },
            {
              type: "line",
              data: meat,
              label: "Meat",
              color:"#fc8d62",
              area: true,
              showMark: false,
              stack: "stack",
            },
            {
              type: "line",
              data: oils,
              label: "Oils and fats",
              color:"#cc3333",
              area: true,
              showMark: false,
              stack: "stack",
            },
            {
              type: "line",
              data: sugar,
              label: "Sugar",
              area: true,
              color:"#386cb0",
              showMark: false,
              stack: "stack",
            },
          ]}
          grid={{ horizontal: true }}
          xAxis={[{ scaleType: "point", data: years }]}
          yAxis={[{ scaleType: "linear", data: yLabels }]}
          slotProps={{ legend: { hidden: true } }}
          sx={{
            display: "flex",
            width: "370px",
            height: "100%",
            marginTop:"10px",
            paddingRight: "6px",
            alignItems: "flex-start",
            gap: "10px",
            flexShrink: 0,
            "& .MuiLineElement-root": {
              strokeWidth: 2,
            },

            "& .MuiMarkElement-root": {
              scale: "0.6",
              fill: "#fff",
              strokeWidth: 2,
            },
            //change left yAxis label styles
            "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
              fill: "#7E8299",
              fontFamily: "Inter",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "14px",
            },
            "& .MuiChartsLegend":{
              fontSize:"10px",
              height:"10px",
            },

            // change bottom label styles
            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
              fill: "#7E8299",
              fontFamily: "Arial",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "14px",
            },
            // bottomAxis Line Styles
            "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
              stroke: "#7E8299",
              strokeWidth: 0,
            },
            // leftAxis Line Styles
            "& .MuiChartsAxis-left .MuiChartsAxis-line": {
              stroke: "#7E8299",
              strokeWidth: 0.0,
            },
          }}
          disableAxisListener
        /><Box sx={{display:"flex",flexDirection:"row",gap:"5px",marginBottom:"8px"}}><Box
        sx={{
          width: 15,
          height: 15,
          bgcolor: '#386cb0',
          marginLeft: '10px',
        }}
      /><Typography sx={{fontSize:"12px"}}>Sugar</Typography> <Box
          sx={{
            width: 15,
            height: 15,
            bgcolor: '#cc3333',
            marginLeft: '5px',
          }}/><Typography sx={{fontSize:"12px"}}>Oils and fats </Typography><Box
        sx={{
          width: 15,
          height: 15,
          bgcolor: '#fc8d62',
          marginLeft: '10px',
        }}
      /><Typography sx={{fontSize:"12px"}}>Meat</Typography> <Box
          sx={{
            width: 15,
            height: 15,
            bgcolor: '#ffff99',
            marginLeft: '5px',
          }}/><Typography sx={{fontSize:"12px"}}>Dairy and eggs </Typography>
      </Box>
        <Box sx={{display:"flex",flexDirection:"row",gap:"5px"}}><Box
          sx={{
            width: 15,
            height: 15,
            bgcolor: '#66c2a5',
            marginLeft: '10px',
          }}
        /><Typography sx={{fontSize:"12px"}}>Pulses</Typography> <Box
            sx={{
              width: 15,
              height: 15,
              bgcolor: 'darkgreen',
              marginLeft: '5px',
            }}/><Typography sx={{fontSize:"12px"}}>Fruits and vegetables</Typography><Box
            sx={{
              width: 15,
              height: 15,
              bgcolor: '#beaed4',
              marginLeft: '5px',
            }}/><Typography sx={{fontSize:"12px"}}>Other</Typography></Box>
      </Box>
  );;
};;

export default Chart2;

