import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import initState from './states/default.js';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import chopShopReducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import { getSession } from './actions/auth';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange, blue } from '@material-ui/core/colors';

let loggerMiddleware = createLogger();


function configureStore(preloadedState) {
  return createStore(
    chopShopReducer,
    preloadedState,
    applyMiddleware(
      loggerMiddleware,
      thunkMiddleware
    )
  );
}

let persistedState = loadState();
let loadedState = Object.assign({},initState,persistedState);

let store = configureStore(loadedState);

store.subscribe(()=>{
  saveState({
    userId: store.getState().userId
  });
});

store.dispatch(getSession());


const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: blue[300],
    },
    secondary: {
      // This is green.A700 as hex.
      main: orange[500],//'#11cb5f',
    },
    text: {
      primary: blue[900],
      secondary: blue[800],
    }
  },
});

ReactDOM.render(
  <Provider store={store}>
   <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
