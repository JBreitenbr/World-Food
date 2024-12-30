import React, { useState,useEffect } from "react";
import { Box,Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

/*const uData = [75, 60, 45, 65, 80, 50];
const pData = [60, 80, 60, 80, 100, 75];
const xLabels = [" ", "9 AM", "12 PM", "15 PM", "18 PM", "19 PM"];*/
const yLabels = [350, 450, 600, 750, 900, 1050, 1200,2000,4000];

const Chart = () => {
const [country,setCountry]=useState("Germany")
const [aniProts,setAniProts]=useState([])
const [vegiProts,setVegiProts]=useState([])
const [fats, setFats] = useState([]);
const [carbs, setCarbs] = useState([]);
const [years, setYears] = useState([]);  
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setAniProts(data[country]["Animal protein"]))
  },[])
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setVegiProts(data[country]["Vegetal protein"]))
  },[])
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setFats(data[country]["Fat"]))
  },[])
    useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setCarbs(data[country]["Carbohydrates"]))
  },[])
  useEffect(() =>{
    fetch('https://raw.githubusercontent.com/JBreitenbr/spotidjango/refs/heads/main/pfc.json')
    .then(res => res.json())
    .then(data => setYears(data["Years"]))
  },[])
  
  return (   
      <Box className="performance-chart"><Typography>{country}</Typography>
        <LineChart
          width={370}
          height={370}
          series={[
            {
              type: "line",
              data: carbs,
              label: "Carbo",
              area: true,
              showMark: false,
              stack: "stack",
            },
            {
              type: "line",
              data: fats,
              label: "Fat",
              area: true,
              showMark: false,
              stack: "stack",
            },
            {
              type: "line",
              data: vegiProts,
              label: "Veg. prot.",
              area: true,
              showMark: false,
              stack: "stack",
            },
            {
              type: "line",
              data: aniProts,
              label: "Animal prot.",
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

