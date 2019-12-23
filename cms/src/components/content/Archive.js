import React, { Component } from 'react';
import chordtypes from './img/chordtypes.JPG';
import './cards.css';
import './Archive.css';
import Card from './Card.js';

export default class Archive extends Component {
    cards = [{
        title:'hello1',
        paragraph:'world'
    },
    {
        title:'hello2',
        paragraph:'world'
    },
    {
        title:'hello3',
        paragraph:'world'
    },
    {
        title:'hello4',
        paragraph:'world'
    },
    {
        title:'hello5',
        paragraph:'world'
    },
    {
        title:'hello5',
        paragraph:'world'
    },
    {
        title:'hello5',
        paragraph:'world'
    },
    {
        title:'hello5',
        paragraph:'world'
    },
    {
        title:'hello5',
        paragraph:'world'
    },
    {
        title:'hello5',
        paragraph:'world'
    },
    {
        title:'hello5',
        paragraph:'world'
    },
    {
        title:'hello5',
        paragraph:'world'
    }
    ]
    render() {
        return (
            <div id="Archive">
                {this.cards.map((card) =><Card cardTitle={card.title} cardParagraph={card.paragraph}/>)}
            </div>
        )
    }
}
