import React from 'react';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

export default withStyles(styles)(({url,path,loading,classes,counter}) =>{
  if(Array.isArray(path)===true){
    path = url+path[counter];
  }
  return (
    <div>
{ loading &&
  <div>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CircularProgress style={{color:"white"}} size={100} thickness={5} className = {classes.progress}/>
      </Grid>
      <Grid item xs={12}>
        <Typography style={{color:"white"}} variant='body1'>Test driving your car...relax for a bit, this should take a few minutes.</Typography>
      </Grid>
    </Grid>
   
   
   </div>
   }
      { path && !loading && <Player
                  autoPlay
                  fluid={false}
                  height={225}
                  width={336}
                  src={path}
                />}
    </div>
  );
});
