import React from 'react';
import CountryCard from '../components/CountryCard';
import "./SearchPage.css"

export class SearchPage extends React.Component {
    state = {
        countriesData: [],
    }

    handleGetAllCountries = () => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then((response) => response.json())
            .then((json) => {

                this.setState({ countriesData: json });
            }).catch(function () {
                window.location.reload()
            });
    }

    handleDisableInputs = (event) => {
        if (event.target.value.length > 0) {
            this.setState({
                isDisabled: true,
                isEnabled: true
            })
        }
    }

    handleSearch = (event) => {
        if (event.key === "Enter" && event.target.className === "alpha") {
            //https://restcountries.eu/rest/v2/alpha?codes=col;no;ee
            if (event.target.value.includes(" ")) {
                event.target.value = event.target.value.replaceAll(" ", ";");
            }

            if (event.target.value.includes(",")) {
                event.target.value = event.target.value.replaceAll(",", ";");
            }

            fetch(`https://restcountries.eu/rest/v2/${event.target.className}?codes=${event.target.value}`)
                .then((response) => response.json())
                .then((json) => {

                    this.setState({ countriesData: json });

                    console.log(this.state.countriesData);
                }).catch(function () {
                    if (window.confirm("Your search returned no result! Press OK to return to search page.")) {
                        window.location.reload()
                      } else {
                        window.location.reload()
                      } 
                });
            event.target.value = "";
        } else {
            if (event.key === "Enter") {
                fetch(`https://restcountries.eu/rest/v2/${event.target.className}/${event.target.value}`)
                    .then((response) => response.json())
                    .then((json) => {

                        this.setState({ countriesData: json });

                        console.log(this.state.countriesData);
                    }).catch(function () {
                        if (window.confirm("Your search returned no result! Press OK to return to search page.")) {
                            window.location.reload()
                          } else {
                            window.location.reload()
                          }
                    });
                event.target.value = "";
            }
        }


    }

    handleFilter = (event) => {
        
        if (event.target.value === "region") {
            const myData = [].concat(this.state.countriesData)
            .sort((a, b) => a.region > b.region ? 1 : -1)
            
            this.setState({countriesData: myData})  
        } 
        if (event.target.value === "population") {
            const myData = [].concat(this.state.countriesData)
            .sort((a, b) => a.population < b.population ? 1 : -1)
            
            this.setState({countriesData: myData})  
        } 
        if (event.target.value === "languages") {
            const myData = [].concat(this.state.countriesData)
            .sort((a, b) => a.languages[0].name > b.languages[0].name ? 1 : -1)
            
            this.setState({countriesData: myData})  
        } 
        if (event.target.value === "currencies") {
            const myData = [].concat(this.state.countriesData)
            .sort((a, b) => a.currencies[0].code > b.currencies[0].code ? 1 : -1)
            
            this.setState({countriesData: myData})  
        }
        
    }

    componentDidMount() {
        this.handleGetAllCountries();
        window.scrollTo(0, 0);
    }


    render() {
        return (
            <div className="search-page-content" style={{ marginTop: '150px' }}>
                <h1>{this.state.Region}</h1>
                <div className="inputs-container">
                    <input onKeyUp={this.handleSearch} className="name" placeholder="search by name..." />
                    <input onKeyUp={this.handleSearch} className="region" placeholder="search by region..." />
                    <input onKeyUp={this.handleSearch} className="capital" placeholder="search by capital..." />
                    <input onKeyUp={this.handleSearch} className="alpha" placeholder="search by code..." />
                    
                    <form>
                    <select id="myList" onChange={this.handleFilter} >
                        <option> ---Choose filter--- </option>
                        <option value="region"> Region </option>
                        <option value="population"> Population </option>
                        <option value="languages"> Languages </option>
                        <option value="currencies"> Currencies </option>
                    </select>
                </form>
                </div>
                
                    <div className="country-card-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {this.state.countriesData.map((country, index) => (
                            <CountryCard
                                key={index}
                                AlphaCode={country.alpha3Code}
                                Flag={country.flag}
                                CardTitle={country.name}
                                Capital={country.capital}
                                Population={country.population} />
                        ))}
                    </div>
            </div>
           
        )
    }
}