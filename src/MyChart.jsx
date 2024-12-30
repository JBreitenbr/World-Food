import React, { useState,useEffect } from "react";
import { Box,Typography,Select,MenuItem  } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

/*const uData = [75, 60, 45, 65, 80, 50];
const pData = [60, 80, 60, 80, 100, 75];
const xLabels = [" ", "9 AM", "12 PM", "15 PM", "18 PM", "19 PM"];*/
const yLabels = [1000,2000,3000,4000,5000];

const Chart = () => {
const [country,setCountry]=useState("Germany")
const [countries,setCountries]=useState([])
const handleChange=(e)=> {
  setCountry(e.target.value)
}
const [aniProts,setAniProts]=useState([])
const [vegiProts,setVegiProts]=useState([])
const [fats, setFats] = useState([]);
const [carbs, setCarbs] = useState([]);
const [years, setYears] = useState([]);  
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setAniProts(data[country]["Animal protein"]))
  },[country])
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setVegiProts(data[country]["Vegetal protein"]))
  },[country])
    useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setCountries(Object.keys(data).slice(1,Object.keys(data).length)))
  },[])
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setFats(data[country]["Fat"]))
  },[country])
    useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setCarbs(data[country]["Carbohydrates"]))
  },[country])
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setYears(data["Years"]))
  },[])
  
  return (   
      <Box className="performance-chart"><Typography>Daily caloric supply derived from carbohydrates, protein and fat, 1992-2021</Typography> <Select
    id="country-select"
    value={country}
    label="Country"
    onChange={handleChange}
  >{countries.map((country,index)=><MenuItem key={index} value={country}>{country}</MenuItem>)}
  </Select>
        <LineChart
          width={370}
          height={420}
          series={[
            {
              type: "line",
              data: carbs,
              label: "Carbo",
              area: true,
              color:"#beaed4",
              showMark: false,
              stack: "stack",
            },
            {
              type: "line",
              data: fats,
              label: "Fat",
              area: true,
              color:"#386cb0",
              showMark: false,
              stack: "stack",
            },
            {
              type: "line",
              data: vegiProts,
              label: "Veg. prot.",
              color:"#66c2a5",
              area: true,
              showMark: false,
              stack: "stack",
            },
            {
              type: "line",
              data: aniProts,
              label: "Animal prot.",
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
            marginTop:"50px",
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

export default Chart;

