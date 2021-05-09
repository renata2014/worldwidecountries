import React from 'react';
import CountryCard from '../components/CountryCard';

export class RegionPage extends React.Component{
    state={
       countriesData: [],
       Region: ""
    }

    handleGetAllCountries = (region) => {
        fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then((response) => response.json())
        .then((json) => {

            this.setState({countriesData: json});

        }).catch(function() {
            window.location.reload()
        });
    }

    componentDidMount(){
        
        const[search, region] = this.props.location.search.split("=");
        console.log(search);
        this.setState({Region: region})
        this.handleGetAllCountries(region);
        window.scrollTo(0,0);
    }
   
   
    render(){
        return(
            <div className="region-page-content" style={{marginTop: '150px'}}>
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