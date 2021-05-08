import React from 'react';
import CountryCard from '../components/CountryCard';

export class Countries extends React.Component{
    state={
       countriesData: []
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

    componentDidMount(){
       
        this.handleGetAllCountries();
        window.scrollTo(0,0);
    }
   
   
    render(){
        return(
            <div className="countries-page-content" style={{marginTop: '150px'}}>
                <h1>{this.state.Region}</h1>

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