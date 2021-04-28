import { connect } from 'react-redux';
import CarRadar from '../components/CarRadar.js';
import {calculateCarWeight,calculateCarCost} from '../util/carActions';

function mapStateToProps(state){
    let reward = 0;
    let gas = 0;
    let grass = 0;
    if(state.compCarConfig && state.compCarConfig.result){
        reward = state.compCarConfig.result[0];
        gas = state.compCarConfig.result[1];
        grass = state.compCarConfig.result[2];
    }
    return {
        title: "Current Car",
        labels: ["Material Cost","Fuel Cost","Distance","Control"],
        values: [calculateCarCost(state.carConfig)/1e5,gas/1e4,reward/1e2,1.0/grass]
    }
}

export default connect(mapStateToProps)(CarRadar);
