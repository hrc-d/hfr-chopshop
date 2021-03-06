 
//this is borrowed from Dan Abramov and his excellent tutorial here:
//https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if(serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    }
    catch(err){
      return undefined;
    }
  };
  
  export const saveState = (state) => {
    try {
      console.log("SAVING STATE");
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state',serializedState);
    }
    catch(err){
      //do nothing on write errors
    }
  }