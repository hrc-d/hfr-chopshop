import { connect } from 'react-redux';
import CarRadar from '../components/CarRadar.js';
import { calculateCarWeight, calculateCarCost } from '../util/carActions';

function mapStateToProps(state){
    return {
        title: "Current Car",
        labels: ["Material Cost: $"+calculateCarCost(state.carConfig).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),"Engine Power: "+(state.carConfig.eng_power/1000)+" HP","Weight: "+calculateCarWeight(state.carConfig).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")+" lb"],
        values: [calculateCarCost(state.carConfig)/1e5,state.carConfig.eng_power/2e5,calculateCarWeight(state.carConfig)/5e3]
    }
}

export default connect(mapStateToProps)(CarRadar);
