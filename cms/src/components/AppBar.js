import React, { Component } from 'react'
import './AppBar.css';
import { ReactComponent as MenuIcon } from './svg/menu-button.svg';

export default class AppBar extends Component {
    render() {
        return (
            <div>
                <nav id="appbar">
                    <ul class="navcontainer">
                    {/*<li class="onbig"><a href="#" class="navbtn">New</a></li>
                        <li class="onbig">|</li>
                        <li class="onbig"><a href="#" class="navbtn">Archive</a></li>
                        <li class="onbig">|</li>
                        <li class="onbig"><a href="#" class="navbtn">Unpublished</a></li>*/}
                        <li class="onsmall"><button class="navbtn" id="menubtn"><MenuIcon id="MenuIcon"/></button></li>
                        <li><a href="#" id="navlogo" class="navbtn">Music<ins>ality</ins></a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
