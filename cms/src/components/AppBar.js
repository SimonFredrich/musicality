import React, { Component } from 'react'
import './AppBar.css';
import { ReactComponent as MenuIcon } from './svg/menu-button.svg';

export default class AppBar extends Component {
    render() {
        return (
            <div>
                <nav id="appbar">
                    <ul className="navcontainer">
                    {/*<li class="onbig"><a href="#" class="navbtn">New</a></li>
                        <li class="onbig">|</li>
                        <li class="onbig"><a href="#" class="navbtn">Archive</a></li>
                        <li class="onbig">|</li>
                        <li class="onbig"><a href="#" class="navbtn">Unpublished</a></li>*/}
                        <li className="onsmall"><button className="navbtn" id={this.props.menubtnid}><MenuIcon id="MenuIcon"/></button></li>
                        <li><a href="../" id="navlogo" className="navbtn">Music<ins>ality</ins></a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
