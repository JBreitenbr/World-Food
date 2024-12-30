import React, { useState,useEffect } from "react";
import { Box,Typography,Select,MenuItem  } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const yLabels = [1000,2000,3000,4000,5000];

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
    .then(data => setSugar(data[country]["Sugar"]))
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
  >{countries.map((country,index)=><MenuItem key={index} value={country}>{country}</MenuItem>)}
  </Select>
        <LineChart
          width={370}
          height={350}
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
              data: sugar,
              label: "Sugar",
              area: true,
              color:"#386cb0",
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
              data: oils,
              label: "Oils and fats",
              color:"#cc3333",
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
            }
          ]}
          grid={{ horizontal: true }}
          xAxis={[{ scaleType: "point", data: years }]}
          yAxis={[{ scaleType: "linear", data: yLabels }]}
          slotProps={{ legend: { hidden: false } }}
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
        />
      </Box>
  );
};

export default Chart2;

