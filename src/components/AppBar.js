import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Grid, withStyles, Modal, colors } from '@material-ui/core';
import { withRouter } from 'react-router';
import COLORS from '../variables/colors';
import LogoIcon from './LogoIcon';
import LeafIcon from './LeafIcon';

const styles = theme => ({
  root: {
    marginBottom: 14,
    height: '100%',
  },
  appbar: {
    backgroundColor: COLORS.yellow_base
  },
  arrow: {
    position: 'absolute',
    left: '5%',
  },
  info: {
    position: 'absolute',
    right: '5%',
    color: COLORS.black_base,
    width: '30px',
    height: '30px'
  },
  title: {
    flexGrow: 1,
  },
  header: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24.2907,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  modal: {
    position: 'absolute',
    width: '90%',
    height: '70%',
    top: '15%',
    left: '5%',
    color: COLORS.black_base,
    backgroundColor: COLORS.yellow_base,
    border: '1px solid #777',
    borderRadius: '25px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center'
  },
  textDiv: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  skipDiv: {
    left: '50%',
    position: 'absolute',
    bottom: '10px',
    transform: 'translateX(-50%)'
  }
});

class MainAppBar extends React.Component {

    constructor(props) {
        super(props);
        this.onBackHandler = this.onBackHandler.bind(this);
        this.onInfoClick = this.onInfoClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
          modalOpen: false
        };
      }

  onBackHandler = () => {
    this.props.history.goBack();
  };

  onInfoClick() {
    this.setState({
      modalOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    const classes = this.props.classes;

      return (
        <div className={this.props.classes.root}>
        <AppBar position="static" className={this.props.classes.appbar}>
          <Toolbar>
          <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          >
          {this.props.canGoBack && (
            <ArrowBackIosIcon className={classes.arrow} onClick={this.onBackHandler}/>
          )}
            <div className={classes.header}>
            <div>
            {/* <LogoIcon style={{width: '300px', height: '35px'}}/> */}
            </div>
            </div>
            <InfoOutlinedIcon className={classes.info} onClick={this.onInfoClick} />
            </Grid>
          </Toolbar>
        </AppBar>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.modalOpen}
          onClose={this.closeModal}
        >
          <div className={classes.modal}>
            <div className={classes.textDiv}>
              {/* <div><LogoIcon style={{width: '250px', height: '30px'}}/></div> */}
              <div>
                <Grid container justify="center" alignItems="center">
                  <Grid item xs={12}>
                    <Typography variant="body2">Aplikacja utworzona w ramach Hackathon+ A11y</Typography>
                    <br/>
                    <Typography variant="body2">Zapraszamy do zapoznania się z prototypem.</Typography>
                    <br/>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className={classes.skipDiv}>
              <Typography variant="h5" onClick={this.closeModal}>zamknij</Typography>
            </div>
          </div>
        </Modal>
      </div>
      )
};
}
  
export default withRouter(withStyles(styles)(MainAppBar));