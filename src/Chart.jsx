import React, { useState } from "react";
import { Box } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
//import "../../assets/sass/components/_performance-chart.scss";

const uData = [75, 60, 45, 65, 80, 50];
const pData = [60, 80, 60, 80, 100, 75];
const xLabels = [" ", "9 AM", "12 PM", "15 PM", "18 PM", "19 PM"];
const yLabels = [35, 45, 60, 75, 90, 105, 120];

const Chart = () => {

  return (         
      <Box className="performance-chart">
        <LineChart
          width={389}
          height={238}
          series={[
            {
              type: "line",
              data: pData,
              label: "pv",
              area: true,
              showMark: false,
              stack: "pv",
            },{
              type: "line",
              data: pData,
              label: "pv2",
              area: true,
              color:"#00ff00",
              showMark: false,
              stack: "pv",
            },
            {
              type: "line",
              data: uData,
              label: "uv2",
              area: true,
              showMark: false,
              stack: "pv",
            },{
              type: "line",
              data: uData,
              label: "uv",
              area: true,
              showMark: false,
              stack: "pv",
            },
          ]}
          grid={{ horizontal: true }}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          yAxis={[{ scaleType: "linear", data: yLabels }]}
          slotProps={{ legend: { hidden: false } }}
          sx={{
            display: "flex",
            width: "389px",
            height: "100%",
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

            // change bottom label styles
            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
              fill: "#7E8299",
              fontFamily: "Inter",
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

