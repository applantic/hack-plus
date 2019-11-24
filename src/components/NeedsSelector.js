import { Container, CssBaseline, withStyles, Typography, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import COLORS from '../variables/colors';
import SightIcon from '../img/icons/sight.png';
import MotorIcon from '../img/icons/motor.png';
import EarIcon from '../img/icons/ear.png'
import HelperIcon from '../img/icons/helper.png';
import MobileStepper from '@material-ui/core/MobileStepper';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    }
  },
  needs: {
  },
  needsRow: {
    marginTop: 20
  },
  needsItemWrapper: {
    display: 'table',
    width: 145,
    height: 145
  },
  needsItem: {
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 14,
    textAlign: 'center',
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  needsItemIcon: {
    height: 60,
    width: 60
  },
  button: {
    width: '100%',
    minHeight: 50,
    backgroundColor: COLORS.yellow_base,
    fontSize: 20,
    boxShadow: '0px 2.31724px 4.63448px rgba(0, 0, 0, 0.25)',
    border: 'none',
    borderRadius: 6
  },
  stepperWrapperOuter: {
    textAlign: 'center'
  },
  stepperWrapper: {
    margin: 'auto',
    display: 'inline-block'
  },
  stepper: {
    backgroundColor: COLORS.white,
    iconColor: COLORS.black_base,
    display: 'flex',
    flexDirection: 'row',
    margin: '0 -5px'
  },
  step: {
    backgroundColor: COLORS.grey_base,
    width: 12,
    height: 12,
    borderRadius: '50%',
    margin: '0 5px'
  },
  stepActive: {
    backgroundColor: COLORS.black_base
  }
});

class NeedsSelector extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const classes = this.props.classes;
    const points = 1015;

    return (
      <Container maxWidth="lg" className={this.props.classes.needs}>
        <CssBaseline />
          <div>
            <Grid container className={this.props.classes.needsRow}>
              <Grid item xs>
                <div className={this.props.classes.needsItemWrapper}>
                  <div className={this.props.classes.needsItem}>
                    <div><img src={SightIcon} className={this.props.classes.needsItemIcon} alt="Nie widzę"/></div>
                    <div>NIE WIDZĘ</div>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <div className={this.props.classes.needsItemWrapper}>
                  <div className={this.props.classes.needsItem}>
                    <div><img src={MotorIcon} className={this.props.classes.needsItemIcon} alt="Mam ograniczenia ruchowe"/></div>
                    <div>MAM OGRANICZENIA RUCHOWE</div>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container className={this.props.classes.needsRow}>
              <Grid item xs>
                <div className={this.props.classes.needsItemWrapper}>
                  <div className={this.props.classes.needsItem}>
                    <div><img src={EarIcon} className={this.props.classes.needsItemIcon} alt="Nie słyszę"/></div>
                    <div>NIE SŁYSZĘ</div>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <div className={this.props.classes.needsItemWrapper}>
                  <div className={this.props.classes.needsItem}>
                    <div><img src={HelperIcon} className={this.props.classes.needsItemIcon} alt="Jestem opiekunem"/></div>
                    <div>JESTEM OPIEKUNEM</div>
                  </div>
                </div>
              </Grid>
            </Grid>
            <div style={{marginTop: 25, marginBottom: 25}}>
              <div className={this.props.classes.stepperWrapperOuter}>
                <div className={this.props.classes.stepperWrapper}>
                  <div className={this.props.classes.stepper}>
                    <div className={`${this.props.classes.step} ${this.props.classes.stepActive}`}></div>
                    <div className={this.props.classes.step}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className={this.props.classes.button}>DALEJ</button>
            </div>
        </div>
      </Container>
    );
  }
}

NeedsSelector.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(NeedsSelector));
