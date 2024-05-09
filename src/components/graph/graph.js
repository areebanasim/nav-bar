import React, {useState} from 'react'
import Chart from "react-apexcharts";
const Graph = () => {
    const [state,setState] = useState({
        options: {
          colors: [ '#E91E63', '#FF9800'],
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "series-1",
            data: [60, 30, 75, 20, 69, 50, 77, 81]
          },
        ],
      });
  return (
    <div>
       <h1>React Chart Graph</h1>
      <div className="row">
        <div className="col-4">
        <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="400"
            />
            <h3>Bar Graph</h3>
        </div>
        <div className="col-4">
        <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="400"
            />
            <h3>Line Graph</h3>
        </div>
        <div className="col-4">
        <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="400"
            />
            <h3>Area Graph </h3>
        </div>
        <div className="col-4">
        <Chart
              options={state.options}
              series={state.series}
              type="radar"
              width="400"
            />
            <h3>Radar Graph</h3>
        </div>
        <div className="col-4">
        <Chart
              options={state.options}
              series={state.series}
              type="scatter"
              width="400"
            />
            <h3>Scatter Graph</h3>
        </div>
        <div className="col-4">
        <Chart
              options={state.options}
              series={state.series}
              type="heatmap"
              width="400"
            />
            <h3>Heatmap Graph</h3>
        </div>
      </div>
    </div>
  )
}

export default Graph
