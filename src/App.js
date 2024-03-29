import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Category from './components/Category';
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import {withStyles} from '@material-ui/core/styles';
import MainAppBar from './components/AppBar';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import COLORS from './variables/colors';
import Fonts from "./components/Fonts";
import Profile from "./components/Profile";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-148040080-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const styles = theme => ({
  root: {
    paddingBottom: '56px',
  },
  fontLoading: {
    opacity: 0,
    transition: 'opacity 0.5s'
  },
  fontLoaded: {
    opacity: 1
  }
});

// use default theme
// const theme = createMuiTheme();

// Or Create your Own theme:
const theme = createMuiTheme({
    palette: {
      primary: {
        main: COLORS.yellow_base,
        contrastText: COLORS.black_base,
      }
    }
  },
)

function App({classes}) {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  useEffect(() => {
    Fonts().then(() => setIsFontLoaded(true));
  });

  return (
    <div className={`app ${isFontLoaded ? classes.fontLoaded : classes.fontLoading}`}>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Router>
            <MainAppBar header="POMAGAMY"/>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/login/" component={Login}/>
            <Route path="/dashboard/" component={Dashboard}/>
            <Route path="/profile/" component={Profile} />
            <Route path="/category/" component={Category}/>
            <SimpleBottomNavigation/>
          </Router>
        </div>
      </MuiThemeProvider>
    </div>
  );

}

export default withStyles(styles)(App);
