import React, { Component } from 'react';
import {ReactComponent as Disc} from '../svg/record.svg';
import './Rotation.css';

export default class Welcome extends Component {
    componentDidMount(){
        const disc = document.getElementById('disc');
        disc.style.animation = "discrotation 1s infinite linear";
    }
    render() {
        return (
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:10}}>
                <h1 style={{fontWeight:"lighter"}}>Welcome!</h1>
                <Disc id="disc" style={{width:300,height:300,marginTop:50}} />
            </div>
        )
    }
}
