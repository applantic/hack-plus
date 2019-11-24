import React from "react";
import {makeStyles, Button} from "@material-ui/core";
import COLORS from '../variables/colors';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    padding: '10px 14px',
    margin: '10px 0px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '14px',
    width: '45%',
    height: "58px",
    textAlign: "center",
    backgroundColor: props => props.selected ? COLORS.yellow_base : COLORS.white,
  },
  spread: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: "100%"
  },
  textBold: {
    fontWeight: "500"
  },
  textRight: {
    textAlign: "center"
  },
})


export default function Option({name, selected, onClick}) {
  const classes = useStyles({selected});

  return (
    <Button className={[classes.container]} onClick={onClick}>
      <div className={classes.spread}>
        <div className={classes.name}>
          <div className={classes.textBold}>{name}</div>
        </div>
      </div>
    </Button>
  );
}
