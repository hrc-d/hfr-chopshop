import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withTheme } from '@material-ui/core/styles';
import UserCarRadarContainer from '../containers/UserCarRadarContainer';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import CarInfoContainer from '../containers/CarInfoContainer';
import CompCarInfoContainer from '../containers/CompCarInfoContainer';
import { withStyles } from '@material-ui/core/styles';
import CostBenefitPlotContainer from '../containers/CostBenefitPlotContainer';
import TestDrivePlayerContainer from '../containers/TestDrivePlayerContainer';
import { TAB_TOP,TAB_BOTTOM } from '../actions/tabs';

function TabContainer(props) {
    return (
          <Typography component="div" style={{ padding: 8 * 3 }}>
              {props.children}
          </Typography>
          );
}
function TabContainerNoPadding(props) {
  return (
        <Typography component="div" style={{ padding: 0 }}>
            {props.children}
        </Typography>
        );
}
const styles = {
  tabbedView: {
    height: 410,
    overflow:'auto',
    marginBottom: 15,
  },
  tab: {
    height:350
  },

  player: {
    height:240,
    width:320,
    margin: 'auto'
  }

};
class Viewspace extends React.Component {
  state = {
    tabValue: 0,
  };
  handleChange = (event, value) => {
    console.log("changing the tab",value);
    this.setState({"tabValue":value});
  };
  render () {
    const { classes} = this.props;
    const { theme } = this.props;
    const primaryColor = theme.palette.primary.main;

    return(
      <React.Fragment>
        <Paper elevation={4} style={{height:"300px"}} >
          <Tabs 
            value={this.props.tabValueBottom} 
            onChange={(e,v)=>this.props.handleSwitchTab(e,TAB_BOTTOM,v)} 
            style={{backgroundColor:primaryColor, color:"white"}}
          >
            <Tab label="Car Analysis" />
            <Tab label="Test Drive Video" />
            <Tab label="Selected Car Details" />
          </Tabs>
          {this.props.tabValueBottom === 0 && <TabContainer><UserCarRadarContainer /></TabContainer>}
          {this.props.tabValueBottom === 1 && 
            <Box style={{backgroundColor:primaryColor, height:"300px"}}>
              <div className={classes.player} style={{padding:"13px"}}>
                <TestDrivePlayerContainer/> 
              </div>
            </Box>}
        
          {this.props.tabValueBottom === 2 && <TabContainer><CompCarInfoContainer /></TabContainer>}
              
          
        </Paper>
        <Paper className={classes.tabbedView}>
          <Tabs 
            value={this.props.tabValueTop} 
            onChange ={(e,v)=>this.props.handleSwitchTab(e,TAB_TOP,v)} 
            scrollable scrollButtons="auto"
            style={{backgroundColor:primaryColor, color:"white"}}
          >
            <Tab label="Tune Component" />
            {/* <Tab label="Selected Car Results" /> */}
            <Tab label="Test Drive History" />
          </Tabs>
          {this.props.tabValueTop === 0 && <TabContainerNoPadding><CarInfoContainer /></TabContainerNoPadding>}
          {/* {this.props.tabValueTop === 1 && <TabContainer><CompCarRadarContainer /></TabContainer>} */}
          {this.props.tabValueTop === 1 && <TabContainer className={classes.tab}><CostBenefitPlotContainer /></TabContainer>}
        </Paper>

      </React.Fragment>
    )
    }
}

export default withTheme(withStyles(styles)(Viewspace));


