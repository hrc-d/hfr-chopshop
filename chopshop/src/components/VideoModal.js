import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TestDriveMultiPlayerContainer from '../containers/TestDriveMultiPlayerContainer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MobileStepper from '@material-ui/core/MobileStepper';




const styles = (theme) => ({
  paper: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    backgroundColor: 'white',//theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: '5px',
    // padding: theme.spacing(2, 4, 3),
  },
});

const tutorialSteps = [
    {
        imgPath: 'img/tutorial/help1.png',
        text: 'The ChopShop Garage is a workshop where raecar drivers can get their cars modified to suit their needs. But none of these drivers are human--they are all "AI" drivers.'
    },
    {
        imgPath: 'img/tutorial/help2.png',
        text: 'You have been hired as one of ChopShop\'s car designers. It is your job to come up with how to modify a car to suit a particular driver.'
    },
    {
        imgPath: 'img/tutorial/help3.png',
        text: 'As a new hire, your first client is an AI that is still learning to drive. The car that you design should account for this. Your modifications should make it easier for the AI to drive at its current skill level and allow it to improve its driving with practice.'
    },
    {
        imgPath: 'img/tutorial/help4.png',
        text: 'You\'ll start out by watching some videos of the AI driving with its current car. Remember that the AI is still learning, so what you see may be quite poor. Try to note what it does well and strugles with.'
    },
    {
        imgPath: 'img/tutorial/help5.png',
        text: 'Once you\'ve watched your client driving, we\'ll ask you to answer some questions about what you\'ve observed and start thinking about a plan for the car design. When you\'re ready to start designing, click Start Designing!'
    },
    {
        imgPath: 'img/tutorial/help6.png',
        text: 'This will take you to the workshop floor. The workshop has two main areas. On the left you see the current state of the car and modify its shape. On the right you can view and modify details about the car design.'
    },
    {
        imgPath: 'img/tutorial/help7.png',
        text: 'Click and drag the circles to change the shape of the car.'
    },
    {
        imgPath: 'img/tutorial/help8.png',
        text: 'At the bottom of this panel, you can select specific components to modify. Hover over each button to see what the component is, and click it to select it.'
    },
    {
        imgPath: 'img/tutorial/help9.png',
        text: 'Once you selet a component, you\'ll see a short informative blurb and a slider show up in the borrom right panel labeled Tune Component. Adjust the slider to modify the design.'
    },
    {
        imgPath: 'img/tutorial/help10.png',
        text: 'Above the tuning panel, you\'ll see a plot showing the relative weight, cost, and engine power of the current design.'
    },
    {
        imgPath: 'img/tutorial/help11.png',
        text: 'If you want to test out a design with your client, hit the Test Drive This Car button above the car panel on the left side.'
    },
    {
        imgPath: 'img/tutorial/help12.png',
        text: 'You should see a loading animation on the right information panel. Note that it will take your client a few minutes to actually drive the car around the track, so please be patient.'
    },  
    {
        imgPath: 'img/tutorial/help13.png',
        text: 'A video recording of the test drive will load in the information panel once it is complete. Watch the video full-screen if you like. You can request as many test drives as you like. Note that as a student driver, your client may not drive the same way every time.'
    },
    {
        imgPath: 'img/tutorial/help13a.png',
        text: 'Each test drive is scored on a range from 0 to 1000 based on how much of the track the driver covered. You can see the cost and score of all your test dries by opening the Test Drive HIstory panel in the bottom right panel.'
    },
    {
        imgPath: 'img/tutorial/help13b.png',
        text: 'When you click a point on this scatterplot, you will see the car body overlaid on the current body, as well as the video for the test drive in the upper right panel. You can open the Selected Car Details panel next to the video to see the full design details. To unselect a car, just click anywhere on the scatterplot background.'
    },
    {
        imgPath: 'img/tutorial/help14.png',
        text: 'Remember, your client is still learning how to drive, and needs to practice to improve! When you are satisfied with your design, hand it off to your client to start practicing with by clicking Submit My Design!'
    },
    {
        imgPath: 'img/tutorial/help15.png',
        text: 'Fill out the form documenting the changes you made to the design and why. Once you are ready, click Finalize Submission. Note that you cannot change the current design once you finalize it!'
    },


]


function VideoModal(props) {
    const classes = props.classes;
    
    //stuff for the help tutorial
    const [activeStep, setActiveStep] = React.useState(0);
    const [expanded, setExpanded] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel: false);
        window.scrollTo(0, expanded.offsetTop-100); 
    }
   

    const body = (
    <div className={classes.paper}>
        <AppBar>
			<Toolbar>
				<Typography style={{"color":"white", "font-family": 'Racing Sans One', "margin":"auto"}} variant="h3">Welcome to ChopShop!</Typography>
			</Toolbar>
		</AppBar>
        <Toolbar></Toolbar>
        <Typography variant='body1'>
            This is a study in which you design a racecar for an AI learning how to drive. If this is your first time, please start by reviewing the tutorial in Step 1. Otherwise, feel free to start with Step 2.
        </Typography>

        <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography className={classes.heading}>Step 1: Learn about Chopshop.</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <img
                            alt={tutorialSteps[activeStep].text}
                            src={tutorialSteps[activeStep].imgPath}
                            style={{"display":"block", "width":"100%", "margin":"auto"}}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            variant="text"
                            activeStep={activeStep}
                            nextButton={
                            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                Next
                                <ArrowForwardIcon />
                            </Button>
                            }
                            backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                <ArrowBackIcon />
                                Back
                            </Button>
                            }
                        />
                    </Grid>
                </Grid>
                
                
                
            </AccordionDetails>
        </Accordion>
        
        <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography className={classes.heading}>Step 2: Learn about the current driver.</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div hidden={props.helpView}>
                <Container spacing={2}>
                    <Typography variant='h5' id="simple-modal-title">An Update on Your Driver's Progress</Typography>
                    <p id="simple-modal-description">
                    The videos below are test drives from your AI driver practicing with your most recent design.<br />
                        Please watch all of the videos to help you answer the questions in Step 3 about your driver.
                    </p>
                </Container>
                <Divider />
                <Grid container spacing={16}>
                    <Grid item xs={6}>
                        <Container>                  
                            <Typography variant='h5'>Test Drive Videos</Typography>
                            <TestDriveMultiPlayerContainer/>  
                            <IconButton aria-label='back' onClick={props.handleBack} disabled={props.counter <= 0}>
                                <ArrowBackIcon />
                            </IconButton>
                            Test Drive Video # {props.counter + 1} / {props.numTestDrives}
                            <IconButton aria-label='forward' onClick={props.handleForward} disabled={props.counter >= props.numTestDrives-1}>
                                <ArrowForwardIcon />
                            </IconButton>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>
                    <Container>
                        <Typography variant='h5'>Your Driver's Progress So Far</Typography>
                        <img src={props.static_url + props.stats_plot} alt='Training Progress Plot' width="370"/>
                    </Container>
                                
                        
                    </Grid>
                
                </Grid>
            </div>
        </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography className={classes.heading}>Step 3: Plan your car and start designing!</Typography>

            </AccordionSummary>
        <AccordionDetails>
        <form onSubmit={props.handleSubmit
        }>
            
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    {/* <label>What is the driver doing well?</label> */}
                    <TextField
                        id="driver_approach"
                        fullWidth
                        label="Describe the driver's approach:"
                        placeholder="How would you describe how the AI is trying to drive around the track?"
                        defaultValue= {props.questions.driver_approach}
                        multiline
                        rows={4}
                        variant="outlined"
                        name="driver_approach"
                    /> 
                </Grid>
                <Grid item xs={6}>
                    {/* <label>What is the driver struggling with?</label> */}
                    <TextField
                        id="driver_strengths"
                        fullWidth
                        label="What is the driver doing well?"
                        placeholder="Are there specific aspects of driving it seems to have mastered?"
                        defaultValue= {props.questions.driver_strengths}
                        multiline
                        rows={4}
                        variant="outlined"
                        name="driver_strengths"
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <TextField
                        id="driver_struggles"
                        fullWidth
                        label="What is the driver struggling with?"
                        placeholder="Are there aspects of the track, car, or driving basics that it is struggling with?"
                        defaultValue= {props.questions.driver_struggles}
                        multiline
                        rows={4}
                        variant="outlined"
                        name="driver_struggles"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="driver_design"
                        fullWidth
                        label="What can you modify the car to improve?"
                        placeholder="What is the driver struggling with that you think you can alleviate by modifying the car?"
                        defaultValue= {props.questions.driver_design}
                        multiline
                        rows={4}
                        variant="outlined"
                        name="driver_design"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type='submit' variant='contained'>Start Designing!</Button>
                </Grid>

            </Grid>
        </form>
            </AccordionDetails>
        </Accordion>
        </div>
        

    
);

return (
    <div>

    <Modal
        open={props.modal_state}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
        {body}
    </Modal>
    </div>
);
}

export default withStyles(styles)(VideoModal);