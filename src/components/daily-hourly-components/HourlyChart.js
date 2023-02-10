import React, { useEffect } from "react";
import Chart from 'chart.js/auto';

export const HourlyChart = ()=>{

    function createChart(){
        const data = [
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
            { year: 2012, count: 15 },
            { year: 2013, count: 25 },
            { year: 2014, count: 22 },
            { year: 2015, count: 30 },
            { year: 2016, count: 28 },
          ];
        const myChart = new Chart(document.getElementById("hourly-chart"),
        {
            type: 'bar',
            data: {
              labels: data.map(row => row.year),
              datasets: [
                {
                  label: 'Acquisitions by year',
                  data: data.map(row => row.count)
                }
              ]
            }
         }
     )
     // check if a chart exists since useEffect renders on mount and strict mode makes it render twice
     if(myChart.id == 0){
        myChart.destroy();
     }
    }

    useEffect(()=>{ 
        createChart()
    },[])

    return(<div className="w-[500px]">
        <canvas id="hourly-chart"></canvas>
    </div>)
}