import { Container, CssBaseline, withStyles } from '@material-ui/core';
import L from 'leaflet';
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
  wasteButton: {
    marginTop: theme.spacing(2)
  }
});

const binIcon = new L.Icon({
  iconUrl: require('../img/smart-bin.svg'),
  iconRetinaUrl: require('../img/smart-bin.svg'),
  iconAnchor: [12.5, 35],
  popupAnchor: null,
  iconSize: [25, 35],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
})

export const items = [
  {
    id: "1",
    img: panda,
    name: 'Wesprzyj funacje WWF',
    price: '220pkt = 5zł',
    amount: 'Przekaż 220pkt',
  },
  {
    id: "2",
    img: ziel,
    name: 'Posadź drzewo!',
    price: '220pkt = Drzewo',
    amount: 'Przekaż 220pkt',
  }
]

const alternatives = [
  {
    img: iqosBlack,
    name: 'Iqos',
    description: '10% zniżki',
  },
  {
    img: iqosWhite,
    name: 'Iqos',
    description: '10% zniżki',
  }
]

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMapClick() {
    this.props.history.push('/map');
  }

  render() {
    const classes = this.props.classes;
    const points = 1015;

    return (
      <Container maxWidth="lg">
        <CssBaseline />
        <div>
          <PointCounter content={{leftPoint: 170, leftText: "PETÓW", rightPoint: 510, rightText: "PKT"}} />
        </div>
        <div>
          <div style={{ paddingTop: '15px' }} > MAKE THE WORLD BETTER</div>
          {items.map(item => <Item {...item} />)}
        </div>
        <div>
          <div style={{ paddingTop: '15px' }} >SMOKE BETTER FOR THE ENVIRONMENT</div>
          <Carousel >{alternatives.map(alternative => <Alternative {...alternative} />)}</Carousel>
        </div>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Dashboard));
