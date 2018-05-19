import React, { Component } from 'react';
import './App.css';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './MapContainer'
import AddLocation from './AddLocation';
import base from './base';

class App extends Component {
  constructor(props) 
	{
        super(props);
        this.state = {
            players: [],

        };

        this.addToMaps = this.addToMaps.bind(this);
       
    }

    addToMaps(player) {
        
        const players = this.state.players.concat(player);
        this.setState({
           players: players,
        });
        
    }


  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <h1> Google Maps API + React </h1> 
     <MapContainer google={this.props.google} players={this.state.players} />
     <AddLocation addToMaps={this.addToMaps}/>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDwanhWM9TOLgIahbB40OllN4TGKHT5S3M',
})(App)