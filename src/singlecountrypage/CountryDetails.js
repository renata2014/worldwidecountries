import React from 'react';
import { Link } from 'react-router-dom';
import './CountryDetails.css';

export class CountryDetails extends React.Component{

    state={
        CountryData:{},
        lat: "",
        lng: "",
        currencies: [],
        languages: [],
        borders: [],
        neighbourName: "",
        alphaCode: ""
    }

    handleGetCountryDetails = (alphaCode) => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${alphaCode}`)
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                        CountryData: json,
                        lat: json.latlng[0],
                        lng: json.latlng[1],
                        currencies: json.currencies,
                        languages: json.languages,
                        borders: json.borders });
        }).catch(function() {
            window.location.reload()
        });
    }

    getNeighbourName = (countryCode) => {
        console.log(countryCode);
        fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
        .then((response) => response.json())
        .then((json) => {
            this.setState({neighbourName: json.name})
        }).catch(function() {
        });
        
        
    }

    componentDidMount(){
        const[search, alphaCode] = this.props.location.search.split("=");
        console.log(search);
        this.handleGetCountryDetails(alphaCode)
        window.scrollTo(0,0);
    }
    
    render(){
        return(
            <div className="country-detail-main">
                <img src={this.state.CountryData.flag} alt=""/>
                <h1> {this.state.CountryData.name}</h1>
                <h4>Abbreviation - {this.state.CountryData.alpha2Code}</h4>
                <h4>Capital - {this.state.CountryData.capital}</h4>
                <h4>Region - {this.state.CountryData.region}</h4>
                <h4>Population - {this.state.CountryData.population}</h4>
                <h4 className="arrangement">Language/s - {this.state.languages.map((lang, index) =>(
                     <h5 key={index}>{lang.name}:
                     <span key={index}>  {lang.nativeName}</span>
                     </h5>
                     ))}</h4>
                <h4>Neighbours - {this.state.borders.map((neighbour, index) =>(
                    <Link to={`/CountryDetails?countryCode=${neighbour}`} > 
                     <h5  key={index} >{neighbour}
                     {/* <span key={index}>  {lang.nativeName}</span> */}
                     </h5>
                     </Link>
                     ))}</h4>
                <h4>Coordinates: 
                    <h6>Latitude: {this.state.lat}</h6> 
                    <h6>Longitude: {this.state.lng}</h6> 
                </h4>
                 <h4>Area - {this.state.CountryData.area}</h4>
                 <h4>Timezone - {this.state.CountryData.timezones}</h4>
                 <h4>Current time - {this.state.CountryData.currenttime}</h4>
                 
                 <h4>Currency - {this.state.currencies.map((curr, index) =>(
                     <h5 key={index} >{curr.name}:
                     <span key={index}>  {curr.symbol}</span>
                     </h5>
                     ))}</h4>
                    
            </div>
        )
    }
}