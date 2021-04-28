import React from 'react';
import {Radar} from 'react-chartjs-2';

let CarRadar = ({labels,values,config,gas,reward,grass,title})=>{
    let data = {
        labels: labels,
        datasets: [
            {
                label: title,
                backgroundColor: '#64b5f6',
                borderColor: 'rgba(13,71,161,0.5)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: values
            }
        ],
        
    }
    return <Radar data={data} height={100} 
                options={{
                    scale:{
                        ticks:{
                            userCallback: (value,index,values)=>''
                        },
                        pointLabels:{
                            fontSize: 16,
                            fontColor: '#0D47A1'
                        },
                        gridLines: {
                            color: 'rgba(13,71,161,0.5)'
                          },
                        angleLines: {
                            color: 'rgba(13,71,161,0.5)'
                        }
                    }
                }}
                legend={{
                    display: false,
                    position: 'left'
                }}
     />
}

export default CarRadar;