import React from "react";
import {makeStyles, Button} from "@material-ui/core";
import COLORS from '../variables/colors';

const useStyles = makeStyles({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: '10px',
    marginLeft: '10px',
    padding: '10px 14px',
    marginTop: '10px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '14px',
    width: '40%',
    height: "58px",
    textAlign: "center",
    backgroundColor: props => props.selected ? COLORS.yellow_base : COLORS.white,
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
        <div className={classes.name}>
          <div className={classes.textBold}>{name}</div>
        </div>
    </Button>
  );
}
