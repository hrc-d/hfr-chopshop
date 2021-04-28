import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';

import {
    calculateCarCost,

    calculateCarWeight,

} from '../util/carActions';


let CarInfoCompact = ({state,config,cost,handleSlider,readOnly}) =>{
  if(!config){
    return <div>No Car Selected</div>
  }



  return <React.Fragment>
          <Table>
            <TableBody>
               <TableRow>
                <TableCell>Wheel Radius: {config.wheel_rad}</TableCell>
                <TableCell>Brake Sensitivity: {config.brake_scalar}</TableCell>
                <TableCell>Color: {config.color}</TableCell>
               </TableRow>
               <TableRow>
                <TableCell>Wheel Width: {config.wheel_width}</TableCell>
                <TableCell>Steering Sensitivity: {config.steering_scalar}</TableCell>
                <TableCell>Estimated Cost: ${Math.floor(calculateCarCost(config))}</TableCell>
               </TableRow>
               <TableRow>
                <TableCell>Tire Tread: {Math.floor(config.friction_lim/1e2)}</TableCell>
                <TableCell>Rear Steering Power: {config.rear_steering_scalar}</TableCell>
                <TableCell>Car Weight: {Math.floor(calculateCarWeight(config))} lb</TableCell>
               </TableRow>
               <TableRow>
                <TableCell>Horsepower: {Math.floor(config.eng_power/1e3)}</TableCell>
                <TableCell>Top Speed Limiter: {config.max_speed}</TableCell>
               </TableRow>
                

            </TableBody>
          </Table>
      </React.Fragment>
}

export default CarInfoCompact;
