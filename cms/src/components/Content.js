import React, { Component } from 'react';
import './Content.css';
import Archive from './content/Archive';
import New from './content/New';
import Welcome from './content/Welcome';

export default class Content extends Component {
    state={
        title:'',
        content:'',
        id:'',
        list:[],
    }
    componentDidMount(){
        this.fetchData();
    }
    componentWillUpdate(){
        this.fetchData();
    }
    fetchData = () => {
    fetch('/api')
        .then(response => response.json())
        .then(data => this.setState({ list:data.reverse() }))
    }
    handleChangetitle = (e) => {
        this.setState({title:e.target.value});
    }
    handleChangecontent = (e) =>{
        this.setState({content:e.target.value});
    }
    wipe=()=>{
        this.setState({title:'',content:''});
    }
    edithandler = (id) =>{
        fetch('/api/'.concat(id)).then((res)=>res.json().then((res)=>this.setState({
            title:res.title,
            content:res.content
        })));
        this.setState({id:id});
        this.props.setmode("Edit");
        this.props.viewhandler("newedit");
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let route = '/api';
        let method = 'POST';
        if(this.props.mode=='Edit'){
            route='/api/'.concat(this.state.id);
            method = 'PUT';
        }
        fetch(route,{
          method:method,
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({title:this.state.title,
          content:this.state.content})
        }).then(this.setState({title:'',content:'',id:'',list:[]}));
      }
    deletebyid=(id)=>{
        fetch('/api/'.concat(id),{method:'DELETE'}).then((res)=>console.log(res));
        this.fetchData();
    }
    selectView() {
        switch(this.props.view){
            case "welcome":
                return (
                    <div>
                       <Welcome />
                    </div>
                );
            break;
            case "newedit":
                return (
                    <div>
                        <New title={this.state.title} content={this.state.content} handleChangetitle={this.handleChangetitle} handleChangecontent={this.handleChangecontent} handleSubmit={this.handleSubmit} edithandler={this.edithandler} mode={this.props.mode} viewhandler={this.props.viewhandler}/>
                    </div>
                );
            break;
            case "archive":
                return (
                    <div>
                        <Archive list={this.state.list} deletebyid={this.deletebyid} edithandler={this.edithandler}/>
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
