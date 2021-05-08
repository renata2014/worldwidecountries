import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import './RegionCard.css';

class RegionCard extends React.Component{
    
    handleOnClick = () => {
       console.log(this.props.location) ;
        this.props.history.push(`/RegionPage?region=${this.props.CardTitle}`)
    }

    

    render(){
        return(
            <div className="card" onClick={this.handleOnClick}>
        <div className="card-header" id="header">
        <img src={this.props.ImgURL} alt=""/>
            
        </div>

        <div className="card-content">
            <h3 className="card-title" id="title" > {this.props.CardTitle}</h3>
            <div>
             <p className="card-text">
             {this.props.CardText}
             </p>
            </div>
        </div>
    </div>
        )
    }
}

export default withRouter(RegionCard)