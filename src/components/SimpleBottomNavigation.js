import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import HeartIcon from './icons/HeartIcon';
import HomeIcon from './icons/HomeIcon';
import HumanIcon from './icons/HumanIcon';
import TickIcon from './icons/TickIcon';
import DescriptionIcon from '@material-ui/icons/Description';
import COLORS from '../variables/colors';
import { withRouter } from 'react-router';

const useStyles = makeStyles({
  root: {
      position: 'fixed',
      width: '100%',
      bottom: 0,
      backgroundColor: COLORS.yellow_base,
  },
  icon: {
      marginTop: '5px',
      marginBottom: '5px',
      fill: COLORS.black_base,
  },
  iconText: {
      color: COLORS.black_base,
  },
  bottomNavigation: {
    color: COLORS.black_base,
  },
});

const bottomNavigationOverrideClasses = makeStyles({
  root: {
    color: COLORS.black_base,
  },
  selected: {
    color: COLORS.black_base,
    backgroundColor: COLORS.yellow_base,
  },
});


function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const overrideClasses = bottomNavigationOverrideClasses();
  const [value, setValue] = React.useState(0);
  
  const onChnageBottom = (componentName) => {
    props.history.push(componentName);
  };

  return (
    <BottomNavigation
      // value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Obszar" onClick={() => {onChnageBottom('/');}} classes={overrideClasses} icon={<TickIcon className={classes.icon}/>}/>
      <BottomNavigationAction label="Wybrane" onClick={() => {onChnageBottom('/')}} classes={overrideClasses} icon={<HeartIcon className={classes.icon}/>} />
      <BottomNavigationAction label="Tablica" classes={overrideClasses} icon={<HomeIcon className={classes.icon}/>} />
      <BottomNavigationAction label="Profil" classes={overrideClasses} onClick={() => {onChnageBottom('/');}} icon={<HumanIcon className={classes.icon}/>} />
    </BottomNavigation>
  );
}

export default withRouter(SimpleBottomNavigation);