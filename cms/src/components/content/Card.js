import React, { Component } from 'react';
import chordtypes from './img/chordtypes.JPG';
import './cards.css';

export default class Card extends Component {
    render() {
        return (
            <div id="courses">
                <div className="cardgrid">
                    <div className="card">                   
                        <div className="card-content">   
                            <div className="card-sidemenu" onClick={()=>(this.props.deletebyid(this.props.id))}></div>                   
                            <div className="overlay"></div>
                            <div className="card-content-img">                              
                            <img src={chordtypes}></img>
                            </div>
                                <h3 className="card-t">{this.props.cardTitle}</h3>
                            <hr className="card-line"></hr>
                            <div className="card-p-contain">
                                <p className="card-p">{this.props.cardParagraph}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
