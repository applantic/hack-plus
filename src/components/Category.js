import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography, withStyles } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import COLORS from '../variables/colors';
import Item from './Item';
import panda from '../img/panda.png';
import ziel from '../img/ziel.png';
import iqosBlack from '../img/iqos-black.png';
import iqosWhite from '../img/iqos-white.png';
import Alternative from "./Alternative";
import PointCounter from './PointCounter';
import Carousel from "./Carousel";
import Option from './Option';




const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: COLORS.yellow_base,
    textColor: COLORS.black_base,
  },
});
  
  const items = [
    {
      key: "1",
      title: "PRACA",
    },
    {
      key: "2",
      title: "EDUKACJA",
    },
    {
        key: "3",
        title: "TRANSPORT",
      },
      {
        key: "4",
        title: "KULTURA",
      },
      {
        key: "5",
        title: "POMOC SPOŁECZNA",
      },
      {
        key: "6",
        title: "ZDROWIE",
      },
      {
        key: "7",
        title: "AKTYWNOŚĆ",
      },
      {
        key: "8",
        title: "MOJE PRAWA",
      },
  ]

class Category extends React.Component {

  constructor(props) {
    super(props);
    this.submitCategoryForm = this.submitCategoryForm.bind(this);

    this.state = {
      selectedCategory: []
    };
  }

  submitCategoryForm(event) {
    event.preventDefault();
    this.props.history.push('/');
  }

  onSelectCategory(item) {
      if(this.state.selectedCategory.includes(item.key)) {
          this.setState(state => {
            const list = state.selectedCategory.pop(item.key);
            return {
              list,
            };
          });
      } else {
        this.setState(state => {
            const list = state.selectedCategory.push(item.key);
            return {
              list,
            };
          });
      }
  }

  render() {
    const classes = this.props.classes;

    return (
      <Container maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">WYBIERZ KATEGORIE</Typography>
          <form className={classes.form} noValidate onSubmit={this.submitCategoryForm}>
          <div>
         {items.map((item) => {
            return <Option name={item.title} onClick={() => this.onSelectCategory(item)} selected={this.state.selectedCategory.includes(item.key)}/>  
         })}
          </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              ZROBIONE
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

Category.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Category));
