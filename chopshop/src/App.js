import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import './App.css';



import ViewspaceContainer from './containers/ViewspaceContainer';
import WorkspaceContainer from './containers/WorkspaceContainer';
import VideoModalContainer from './containers/VideoModalContainer';


import { setWorkspaceWidth } from './actions/dimensions.js';
class App extends Component {
resize(props){
	console.log("matt", this);
	let docWidth = document.getElementById("workspace").clientWidth;
	props.resize(docWidth);
}
componentDidMount(){
	this.resize(this.props);
	window.addEventListener("resize", ()=>this.resize(this.props));
}
componentWillUnmount() {
  window.removeEventListener('resize', ()=>this.resize(this.props));
}
render() {
    return (
      <div className="App">
		<VideoModalContainer>
			
			
		</VideoModalContainer>

		<AppBar>
			<Toolbar>
				<Typography style={{"color":"white", "font-family": 'Racing Sans One', "margin":"auto"}} variant="h3">The ChopShop Garage</Typography>
			</Toolbar>
		</AppBar>
		<Toolbar />
		<Toolbar />
		<Grid container spacing={8}>
			<Grid item xs={1}></Grid>
			<Grid item xs={5}>
				<WorkspaceContainer />
			</Grid>
			
			<Grid item xs={5}>
				<ViewspaceContainer />
			</Grid>
		</Grid>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
	return {
		resize: (width) => dispatch(setWorkspaceWidth(width))
	}
}
function mapStateToProps(state){
	return {
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
