import React from 'react';
import { withRouter } from 'react-router';
import './CountryCard.css';

class CountryCard extends React.Component{
    handleOnClick = () =>{
        this.props.history.push(`/CountryDetails?countryCode=${this.props.AlphaCode}`)
    }
    render(){
        return(
                <div className="country-card" onClick={this.handleOnClick}>
        <div className="country-card-header" id="country-header">
        <img src={this.props.Flag} alt="" className="country-card-picture"/>
            
        </div>

        <div className="country-card-content">
            <h3 className="country-card-title" id="country-title" > {this.props.CardTitle}</h3>
            <div className="country-card-text">
             <p className="country-card-capital">
             Capital - {this.props.Capital}
             </p>
             <p className="country-card-population">
             Population - {this.props.Population}
             </p>
            </div>
        </div>
    </div>
        )
    }
}

export default withRouter(CountryCard)

