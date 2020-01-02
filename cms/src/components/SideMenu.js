import React, { Component } from 'react'
import './sidemenu.css';
import profilepicture from './img/profile.png'
import navmenuobj from './navmenu.js';



export default class SideMenu extends Component {
    componentDidMount() {
        //all sidemenu items
        const overlay = document.getElementById("sidemenuoverlay");
        const menutray = document.getElementById("sidemenu");
        const navmenu = new navmenuobj(overlay,menutray);
        const sidemenuclose = document.getElementById("sidemenuclose");
        const sidemenulinks = document.getElementsByClassName("sidemenulink");

        //sidemenu trigger
        const menubtn = document.getElementById(this.props.trigger);

        //sidemenu setting-up
        menubtn.addEventListener("click", navmenu.unwrapSideMenu);
        overlay.addEventListener("click", navmenu.wrapSideMenu);
        //wrapping up sidemenu after choosing an option
        for (let i = 0; i<sidemenulinks.length; i++){
            sidemenulinks[i].addEventListener("click",navmenu.wrapSideMenu);
        }
    }
    render() {     
        return (
            <>
            <div id="sidemenuoverlay">
            </div>
            <div id="sidemenu">
                <ul id="sidemenuitems">
                    <li id="profile-item"><div id="profilewrapper"><img src={profilepicture}></img></div><a href="javascript:void(0)" className="sidemenulink" onClick={()=>this.props.viewhandler("profile")}>{this.props.user}</a></li>
                    <li className="liseparator"><hr className="separator"></hr></li>
                    <li><a className="sidemenulink" href="javascript:void(0)" onClick={()=>{this.props.viewhandler("newedit");this.props.setmode("New")}}>New</a></li>
                    <li><a className="sidemenulink" href="javascript:void(0)" onClick={()=>this.props.viewhandler("archive")}>Archive</a></li>
                    <li><a className="sidemenulink" href="javascript:void(0)" onClick={()=>this.props.viewhandler("drafts")}>Drafts</a></li>
                    <li><a className="sidemenulink" href="javascript:void(0)" onClick={()=>this.props.viewhandler("settings")}>Settings</a></li>
                    <li className="liseparator"><hr className="separator"></hr></li>
                </ul>
            </div>
            </>
        )
    }
}
