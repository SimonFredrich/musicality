import React, { Component } from 'react';
import CardSideMenu from './CardSideMenu.js';
import chordtypes from './img/chordtypes.JPG';
import './cards.css';
import truncate from './truncate.js';
import {ReactComponent as LeftArrow} from './svg/left-arrow.svg';
export default class Card extends Component {  
    state= {
        wrapped:true
    }
    componentDidMount = ()=>{
        this.sidemen = document.getElementById(this.props.id);
        this.sidementrigger = document.getElementById("trigger:".concat(this.props.id)); 
    }
    wrap= ()=>{
        if (this.state.wrapped){
            this.sidemen.style.transition = 'width 0.3s';
            this.sidemen.style.width= '50px';
            this.sidementrigger.style.transition= 'right 0.3s';
            this.sidementrigger.style.transition= 'transform 0.3s';
            this.sidementrigger.style.transform= 'rotate(180deg)'
            this.sidementrigger.style.right= '40px';
        }
        else {
            this.sidemen.style.transition = 'width 0.3s';
            this.sidemen.style.width= '0px';
            this.sidementrigger.style.transition= 'right 0.3s';
            this.sidementrigger.style.transition= 'transform 0.3s';
            this.sidementrigger.style.transform= 'rotate(0deg)'
            this.sidementrigger.style.right= '0px';
        }
        this.setState({wrapped:!this.state.wrapped});
    }
    render() {
        return (
            <div id="courses">
                <div className="cardgrid">
                    <div className="card">                   
                        <div className="card-content">
                            <div className="card-sidemenu-trigger" onClick={this.wrap} id={"trigger:".concat(this.props.id)}><LeftArrow className="card-sidemenu-trigger-svg"/></div>   
                            <CardSideMenu deletebyid={this.props.deletebyid} id={this.props.id} wrap={this.wrap} edithandler={this.props.edithandler}/>                   
                            <div className="card-content-img">                              
                            <img src={chordtypes}></img>
                            </div>
                                <h3 className="card-t">{this.props.cardTitle}</h3>
                            <hr className="card-line"></hr>
                            <div className="card-p-contain">
                                <p className="card-p">{truncate(this.props.cardParagraph)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
