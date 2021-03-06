import React, { Component } from 'react';
import chordtypes from './img/chordtypes.JPG';
import './cards.css';
import './Archive.css';
import Card from './Card.js';

export default class Archive extends Component {
    render() {
        return (
            <div id="Archive">
                {this.props.list.map((card) =><Card cardTitle={card.title} cardParagraph={card.content} key={card._id} id={card._id} deletebyid={this.props.deletebyid} edithandler={this.props.edithandler}/>)}
            </div>
        )
    }
}
