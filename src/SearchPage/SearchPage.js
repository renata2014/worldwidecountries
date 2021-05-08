import React from 'react';
import CountryCard from '../components/CountryCard';
import "./SearchPage.css"

export class SearchPage extends React.Component{
    state={
       countriesData: [],
       isDisabled: false,
       isEnabled: false,
    }

    handleGetAllCountries = () => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then((response) => response.json())
        .then((json) => {

            this.setState({countriesData: json});

            console.log(this.state.countriesData);
        }).catch(function() {
            window.location.reload()
        });
    }

    handleDisableInputs = (event) =>{
        if (event.target.value.length > 0) {
            console.log(event.target.value);
            this.setState({isDisabled: true , 
                            isEnabled: true})
        }
    }

    handleSearch = (event) =>{
        
        if (event.key === "Enter") {
            console.log(event.target.value);
        console.log(event.target.className);
            
        
            fetch(`https://restcountries.eu/rest/v2/${event.target.className}/${event.target.value}`)
        .then((response) => response.json())
        .then((json) => {

            this.setState({countriesData: json});

            console.log(this.state.countriesData);
        }).catch(function() {
            //aici tre sa pui alerta
            window.location.reload()
        });
        event.target.value = "";
        }
        
    }

    componentDidMount(){
       
        this.handleGetAllCountries();
        window.scrollTo(0,0);
    }
   
   
    render(){
        return(
            <div className="search-page-content" style={{marginTop: '150px'}}>
                <h1>{this.state.Region}</h1>
                <div className="inputs-container">
                <input onKeyUp={this.handleSearch} className="region" placeholder="search by region..."/>
                <input onKeyUp={this.handleSearch} className="currency" placeholder="search by currencies..."/>
                <input onKeyUp={this.handleSearch} className="capital" placeholder="search by capital..."/>
                <input onKeyUp={this.handleSearch} className="lang" placeholder="search by languages..."/>
                <input onKeyUp={this.handleSearch} className="alpha" placeholder="search by code..."/>
                </div>
            <div className="country-card-container" style={{display: 'flex', flexWrap: 'wrap'}}>
                {this.state.countriesData.map((country, index) => (
                    <CountryCard
                    key={index}
                    AlphaCode={country.alpha3Code}
                    Flag={country.flag} 
                    CardTitle={country.name}
                    Capital={country.capital}
                    Population={country.population}/>
                ))}
            </div>
            </div>
           
        )
    }
}