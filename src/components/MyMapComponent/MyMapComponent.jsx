import React from "react";
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import {HeatmapLayer} from "react-leaflet-heatmap-layer-v3";
import { geojson } from "./atd";
import MessageDisplayBox from "../MessageDisplayBox/MessageDisplayBox";
import EmergencyButton from "../EmergencyButton/EmergencyButton";

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 12.9716,
      lng: 77.5946,
      zoom: 12,
      position: [12.9716, 77.5946]
    };
  }

  render() {
    const {
      user,
      EmergencyButtonIsClick,
      policeAssign,
      distance,
    } = this.props;

    const message = distance + " metros de ti";

    const componentToShow = user === 'usuario' ? ( 
      EmergencyButtonIsClick ? <MessageDisplayBox
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
      <div>      
        <LeafletMap className='container__map' center={this.state.position} zoom={this.state.zoom}>
          {componentToShow}
          <HeatmapLayer
            points={geojson.features}
            longitudeExtractor={(m) => m.geometry.coordinates[0]}
            latitudeExtractor={(m) => m.geometry.coordinates[1]}
            intensityExtractor={(m) => parseFloat(m.geometry.coordinates[1])}
            max={100}
            minOpacity={0.2}
          />
          
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          
        </LeafletMap>
      </div>
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
