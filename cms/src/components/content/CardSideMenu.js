import React, { Component } from 'react'
import './cards.css';
import {ReactComponent as DeleteIcon} from './svg/rubbish-bin.svg';
import {ReactComponent as EditIcon} from './svg/pencil-edit.svg';

export default class CardSideMenu extends Component {
    render() {
        return (
            <div id={this.props.id} className="card-sidemenu">
            <button className="sidemenu-btn" onClick={()=>(this.props.deletebyid(this.props.id))}><DeleteIcon className="sidemenu-icon" /></button>
            <button className="sidemenu-btn" onClick={()=>(this.props.edithandler(this.props.id))}><EditIcon className="sidemenu-icon edit" /></button>
            </div>
        )
    }
}
