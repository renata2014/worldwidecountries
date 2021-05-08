import React from 'react';
import './CountryDetails.css';

export class CountryDetails extends React.Component{

    state={
        CountryData:{}
    }

    handleGetCountryDetails = (alphaCode) => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${alphaCode}`)
        .then((response) => response.json())
        .then((json) => {

            this.setState({CountryData: json});

            console.log(this.state.CountryData);
        }).catch(function() {
            window.location.reload()
        });
    }


    componentDidMount(){

        const[search, alphaCode] = this.props.location.search.split("=");
        this.handleGetCountryDetails(alphaCode)

    }
    
    render(){
        return(
            <div>
                <img src={this.state.CountryData.flag} alt=""/>
                <h1> {this.state.CountryData.name}</h1>
                <h4>Abbreviation - {this.state.CountryData.alpha2Code}</h4>
                <h4>Capital - {this.state.CountryData.capital}</h4>
                <h4>Region - {this.state.CountryData.region}</h4>
                <h4>Population - {this.state.CountryData.population}</h4>
                <h4>Coordinates - {this.state.CountryData.latlng}
                   {this.state.CountryData.latlng}
                 {/* <h6>{this.state.CountryData.latlng[0]}</h6> 
                 <h6>{this.state.CountryData.latlng[1]}</h6> */}
                 </h4>
            </div>
        )
    }
}