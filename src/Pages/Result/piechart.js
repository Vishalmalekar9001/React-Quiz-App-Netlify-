import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      options: {
        labels: ['CorrectAnswers', 'IncorrectAnswers']},
      series: [2/9, 7/9]
 
    }
  }
 
  render() {
 
    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}
 
export default Donut;
