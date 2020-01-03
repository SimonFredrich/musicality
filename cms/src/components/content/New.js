import React, {Component} from 'react';
import './New.css';

export default class New extends Component {
  handleSubmit=(e)=>{
    this.props.handleSubmit(e);
    this.props.viewhandler("archive");
  }
  render(){
    return(
      <div id="New">
      <h1 style={{fontSize:'3em',marginBottom:'20px',fontWeight:'lighter',textAlign:'center'}}>{this.props.mode}</h1>
        <form method="POST" autoComplete="off" id="newform" onSubmit={this.handleSubmit}>
          <input type="text" value={this.props.title} onChange={this.props.handleChangetitle} name="title" id="title" placeholder="Title..."></input>
          <hr id="postseparator"></hr>
          <textarea id="postcontent" value={this.props.content}  onChange={this.props.handleChangecontent} name="postcontent" rows="10" placeholder="Content..."></textarea>
          <input type="submit" className="formsubmit" value="Publish" name="publish"></input>
        </form>
      </div>
    )
  }
}
