import React, { Component } from 'react'
import './cards.css';

export default class CardSideMenu extends Component {
    render() {
        return (
            <div id={this.props.id} className="card-sidemenu">
            <button onClick={()=>(this.props.deletebyid(this.props.id))}>delete</button>
            </div>
        )
    }
}
