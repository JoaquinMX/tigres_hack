import React from "react";
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import {HeatmapLayer} from "react-leaflet-heatmap-layer-v3";
import { geojson } from "./atd";
import MessageDisplayBox from "../MessageDisplayBox/MessageDisplayBox";
import EmergencyButton from "../EmergencyButton/EmergencyButton";
import L from 'leaflet';
import marker from '../../public/policeman.svg';
import { reAdjustateCoordinates } from './myCoordinates';

let data = reAdjustateCoordinates(geojson.features);

const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor: null,
    iconSize: [32,45],
});

class Map extends React.Component {

  constructor() {
    super();
    this.state = {
      lat: 25.725396,
      lng: -100.312890,
      zoom: 18,
      position: [25.725396, -100.312890],
    };
  }
  render() {
    const {
      user,
      EmergencyButtonIsClick,
      policeAssign,
      distance,
      currentPosition,
      setCurrentPosition,
      isItPressed,
      setIsItPressed
    } = this.props;

    const message = distance + " metros de ti";

    const componentToShow = user === 'usuario' ? ( 
      isItPressed ? <MessageDisplayBox
        message={message}
        user = "usuario"
    ></MessageDisplayBox> : <EmergencyButton></EmergencyButton>) :
    (
      policeAssign === true ? (<MessageDisplayBox
      message={message}
      user = "policia"
      ></MessageDisplayBox>) : null//muetra otros policias
    )
    return (
      <LeafletMap center={this.state.position} zoom={this.state.zoom}>
        {componentToShow}
        <HeatmapLayer
          points={data}
          longitudeExtractor={(m) => m[1]}
          latitudeExtractor={(m) => m[0]}
          intensityExtractor={(m) => parseFloat(m[0])}
          max={100}
          minOpacity={0.2}
        />
        <Marker icon={myIcon} position={currentPosition} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
      </LeafletMap>
    );
  }
}

Map.defaultProps = {
  user:null,
  EmergencyButtonIsClick:false,
  policeAssign:false,
  distance:null,
};


export default Map;
