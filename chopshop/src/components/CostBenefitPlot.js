import { Scatter } from 'react-chartjs-2';
import React from 'react';
import {calculateCarCost} from '../util/carActions';


export const adjustReward = (result)=>{
  const rewardScale = 1.0;
  const gasScale = 1.0/1e9;
  const grassScale = 1.0;
  return [rewardScale*result[0],gasScale*result[1],grassScale*result[2]];
}



let CostBenefitPlot = ({testedCars,histCars,handleSelectCompCar,handleClearCompCar})=>{
  console.log("CARS",testedCars);
  let cars = [];
  let labels = [];

  if(histCars && histCars.length>0){  
    cars.push({
      label: 'Reference Car Designs',
      data: histCars.map(((car,index)=>{
        let cost = car['result'][1]+calculateCarCost(car['config']);
        let benefit = car['result'][0]-car['result'][2]
        return {id:index, x: benefit, y: cost};
      })),
      pointHoverBorderWidth: 10,
      pointBorderWidth: 5,
      pointHoverRadius: 20,
      pointRadius: 10,
      pointHitRadius: 50,
    });
    labels.push('Reference Car Designs');
  }

  if(testedCars && testedCars.length>0){
    cars.push({
      label: 'My Cars',
      data: testedCars.map(((car,index)=>{
        let cost = calculateCarCost(car['config']);
        let benefit = car['result'][0]
        return {id:index, x: benefit, y: cost};
      })),
      backgroundColor: testedCars.map(((car,index)=>{
        if(index < testedCars.length-1){
          return 'rgba(75,192,192,1)';
        }
        else{
          return 'rgba(192,1,1,1)';
        }
      })),
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBorderWidth: 5,
      pointHoverRadius: 20,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 10,
      pointRadius: 10,
      pointHitRadius: 50,
    });
    labels.push('My Cars');
  }
 const data = {
    labels:labels,
    datasets:cars
  }
  console.log(cars);
  return <div style={{height:"220px"}}>
       <ul style={{listStyle: "none"}}>
     <li><div style={{backgroundColor: "rgba(192,1,1,1)", height: "10px", width: "10px", display: "inline-block", margin:"1px"}}></div>Most recent test drive</li>
   </ul>
  <Scatter
    data={data}
    getElementAtEvent={(e)=>{
      //assume it's only one element (I think that's why this is singular?)
      if (e.length > 0){
        let element = e[0];
        let type = "testedCars";
        return handleSelectCompCar(e,type,element._index);
      }
      else{
        return handleClearCompCar(e);
      }

    }}
    options ={{
      responsive: true,
      maintainAspectRatio: false,
      scales: {
          xAxes: [{
              type: 'linear',
              position: 'bottom',
              scaleLabel:{
                display:true,
                labelString: 'Test Drive Score'
              }
          }],
          yAxes: [{
            position: 'left',
            scaleLabel:{
              display:true,
              labelString: 'Total Cost'
            }
        }],
      },
      legend: {
        display: false
      },
      legendCallback: (chart) => {
            var text = []; 
        text.push('<ul class="' + chart.id + '-legend">'); 
        
          text.push('<li><span style="background-color: rgba(192,1,1,1)"></span>'); 
  
            text.push("Most recent test drive"); 
    
          text.push('</li>'); 
         
        text.push('</ul>'); 
        return text.join(''); 
      } 
    }
  }
  />

</div>
};

export default CostBenefitPlot;
