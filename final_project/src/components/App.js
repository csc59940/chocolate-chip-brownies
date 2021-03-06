import React from 'react'
import { GoogleApiWrapper } from 'google-maps-react' 
import MapContainer from './MapContainer'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import logo from "./Logo1.png"
import SearchBox from './SearchBox';
import base from "../base";
import HowItWorks from "./HowItWorks";
import Login from "./Login";

class App extends React.Component {
  constructor(props) 
  {
        super(props);
        this.state = {
            locations: [] ,
        };

        this.addToMaps = this.addToMaps.bind(this);
        
       
    }

    componentDidMount() {
    base.syncState('locations', {
        context: this,
        state: 'locations',
        asArray: true
    });
   
}
  
  componentWillUnmount() 
  {
    base.removeBinding(base.syncState);
  }

    addToMaps(location) {
        const locations = this.state.locations.concat(location);
        this.setState({
           locations: locations
        });
    }
    

  render() {
    
    const map = <MapContainer google={this.props.google} locations={this.state.locations} />
     
    return (
      <BrowserRouter>
       <div>               
        <nav className="navbar navbar-expand-lg ">  
                <ul className="navbar-nav">
                  <li className= "nav-item">
                    <img className= "logo" src={logo}/> 
                  </li>
                    <li className="nav-item">
                        <NavLink to={"/"} className="nav-link" href="#">Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to ={"/Specification"} className="nav-link" href="#">Specification</NavLink>
                    </li>
          <li className = "nav-item">
            <NavLink to={"/Login"} className="nav-link" href = "#"> Login </NavLink>
          </li>
        </ul>
      </nav>
        
         <Route exact path ="/" render = {()=>
          <div>
          <SearchBox addToMaps={this.addToMaps} />
          {map}
          </div>
          } />  

          <Route exact path = "/Specification" render = {() => <HowItWorks />} />  
          <Route exact path = "/Login" render = {() => <Login />} />          
                
    </div>

    </BrowserRouter>
    

    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDwanhWM9TOLgIahbB40OllN4TGKHT5S3M',
})(App)