import { WHEEL_SIZE, BODY, DRIVETRAIN, ENGINE } from '../actions/carConfig'

let defaultState = {
  dimensions: {
    workspaceHeight: 600,
    workspaceWidth: 800
  },
  tabs: {
    top: 0,
    bottom: 0,
    video_modal: true,
    config_focus: "ENG_POWER"
  },
  selectedFeatures:{
    WHEEL_RAD: false,
    WHEEL_WIDTH: false,
    FRICTION_LIM: false,
    ENG_POWER: false,
    BRAKE_SCALAR: false,
    STEERING_SCALAR: false,
    REAR_STEERING_SCALAR: false,
    MAX_SPEED: false,
    COLOR: false,
    BUMPER: false,
    SPOILER: false,
    REAR_BODY: false,
    FRONT_BODY: false
  },
  userId: "",
  session: {},
  carRacingUrl: "http://localhost:5000/",
  carRacingStaticUrl: "http://localhost:5000/static/",
  carRacingApiUrl: "http://localhost:5000/",
  testDriveVideo: "c2e700ac376f4ee18a68c59a9b6ce5d9.mp4",

  
  statsPlotPath: "http://localhost:5000/static/default/reward_plot.png",
  testDriveMultiCounter: 0,
  numEpisodes: 1,
  carConfig: {
               hull_poly1: [[-60, 130], [60, 130], [60, 110], [-60, 110]],
               hull_poly2: [[-15, 120], [15, 120], [20, 20], [-20, 20]],
               hull_poly3: [[25, 20], [50, -10], [50, -40], [20, -90], [-20, -90], [-50, -40], [-50, -10], [-25, 20]],
               hull_poly4: [[-50, -120], [50, -120], [50, -90], [-50, -90]],
               //hull_densities: [1.2040643615777822, 1.3543495591753878, 1.3917081355952508, 1.146669800908215],
               hull_densities: [1,1,1,1],
               eng_power: 40000,
               wheel_pos: [[-55, 80], [55, 80], [-55, -82], [55, -82]],
               wheel_width: 14,
               wheel_rad: 27,
               wheel_moment: 1.6,
               drive_train: [0, 0, 1, 1],
               friction_lim: 400,
               color: '0000ff'
  },
  testedCars: [],
  
}

export default defaultState;
