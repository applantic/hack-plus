import { Container, CssBaseline, withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import Item from './Item';
import panda from '../img/panda.png';
import ziel from '../img/ziel.png';
import iqosBlack from '../img/iqos-black.png';
import iqosWhite from '../img/iqos-white.png';
import Alternative from "./Alternative";
import PointCounter from './PointCounter';
import Carousel from "./Carousel";
import NeedsSelector from './NeedsSelector';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    '.leaflet-container': {
      height: '100%',
      borderRadius: '20px'
    }
  },
  dashboard: {
  },
  avatar: {
    margin: 10
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20
  }
});

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const classes = this.props.classes;
    const points = 1015;

    return (
      <Container maxWidth="lg">
        <CssBaseline />
        <div>
          <Typography variant="body1" className={this.props.classes.title}>OKREŚL POTRZEBY</Typography>
        </div>
        <div>
          <NeedsSelector/>
        </div>
        <div>
        </div>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Dashboard));
