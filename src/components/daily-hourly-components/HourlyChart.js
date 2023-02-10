import React, { useEffect } from "react";
import Chart from 'chart.js/auto';

export const HourlyChart = ()=>{

    function createChart(){
        const data = [
            { year: 30, hour:  "1:00pm"},
            { year: 29, hour:  "2:00pm"},
            { year: 29, hour:  "3:00pm"},
            { year: 32, hour:  "4:00pm"},
            { year: 34, hour:  "5:00pm"},
            { year: 32, hour:  "6:00pm"},
            { year: 32, hour:  "7:00pm"},
          ];
        const myChart = new Chart(document.getElementById("hourly-chart"),
        {
            type: 'bar',
            data: {
              labels: data.map(row => row.hour),
              datasets: [
                {
                  label: 'Acquisitions by year',
                  data: data.map(row => row.year)
                }
              ]
            }
         }
     )
         console.log(myChart)
    }

    useEffect(()=>{ 
        createChart()
    },[])

    return(<div className="w-full">
        <canvas id="hourly-chart"></canvas>
    </div>)
}