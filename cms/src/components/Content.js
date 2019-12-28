import React, { Component } from 'react';
import './Content.css';
import Archive from './content/Archive';
import New from './content/New';

export default class Content extends Component {
    state={
        title:'',
        content:'',
        list:[]
    }
    componentDidMount(){
    this.fetchData();
    }
    fetchData = () => {
    fetch('/api')
        .then(response => response.json())
        .then(data => this.setState({ list:data }))
    }
    handleChangetitle = (e) => {
        this.setState({title:e.target.value});
    }
    handleChangecontent = (e) =>{
        this.setState({content:e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({title:this.state.title,
          content:this.state.content})
        }).then(this.setState({title:'',content:''}));
        this.fetchData();
      }
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
                        <New title={this.state.title} content={this.state.content} handleChangetitle={this.handleChangetitle} handleChangecontent={this.handleChangecontent} handleSubmit={this.handleSubmit} />
                    </div>
                );
            break;
            case "archive":
                return (
                    <div>
                        <Archive list={this.state.list} />
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
