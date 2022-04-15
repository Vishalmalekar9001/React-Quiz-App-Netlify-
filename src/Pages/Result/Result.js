import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Chart from 'react-apexcharts'
import React from 'react';
const Result = ({ name, score }) => {
  const history = useHistory();
const options = {
  labels: ['CorrectAnswers', 'IncorrectAnswers']
}
const series = [score/7, (7-score)/7] 

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);

  return (
    <div className="result">
      <span className="title">Your Score : {score} out of 7 </span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
      <div className="donut">
      <h4>Pie Chart for the Quiz</h4>
      <Chart 
      options={options} 
      series={series} 
      type="donut" 
      width="380" />
      </div>
      
     </div>
     
     
     
     





  );
};

export default Result;
