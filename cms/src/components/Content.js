import React, { Component } from 'react';
import './Content.css';
import Archive from './content/Archive';

export default class Content extends Component {
    selectView() {
        switch(this.props.view){
            case "welcome":
                return (
                    <div>
                       welcome 
                    </div>
                );
            break;
            case "newedit":
                return (
                    <div>
                        newedit
                    </div>
                );
            break;
            case "archive":
                return (
                    <div>
                        <Archive />
                    </div>
                );
            break;
            case "drafts":
                return (
                    <div>
                        drafts
                    </div>
                );
            break;
            case "profile":
                return (
                    <div>
                        profile
                    </div>
                );
            break;
            case "settings":
                return (
                    <div>
                        settings
                    </div>
                );
            break;
            default:
                return (
                    <div>
                        404 option not found
                    </div>
                );
            break;
        }
    }
    render() {
        return (
            <div id="contentwrapper">
                {this.selectView()}
            </div>
        )
    }
}

