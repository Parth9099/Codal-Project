import React, {Component} from "react";
import Chart from "react-apexcharts";

class Grpah extends Component{
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 70, 49, 60, 70, 91]
        }
      ]
    };
  }
      render(){
          return (
            <div className="app">
              <div className="row">
                <div className="mixed-chart">
                  <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="350"
                    height="300"
                  />
                </div>
              </div>
            </div>
          );
      }
}

export default Grpah
