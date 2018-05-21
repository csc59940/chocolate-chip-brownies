<<<<<<< HEAD
import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import 'bootstrap';

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);  
    this.state = { address: '' }
  }


  handleChange = (address) => {
    this.setState({ address })

  }

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.addToMaps(latLng))
      .catch(error => console.error('Error', error))

  }


  render() {


    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input'
              })}
            />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div {...getSuggestionItemProps(suggestion, { className, style })}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;
=======
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class SearchBox extends React.Component 
{
	render () {
		return(
			<div className = "container box-container">
				<div className="col-sm-10 input-box" >	
						<input type="text" name= "location" className="form-control" placeholder="Enter a location "/> 
				</div>
				<hr/>
			</div>
		);
	}
}

export default SearchBox;
>>>>>>> master