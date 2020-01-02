import React, {Component} from 'react';
import './New.css';

export default class New extends Component {
  handleSubmit=()=>{
    this.props.viewhandler("archive");
    this.props.handleSubmit();
  }
  render(){
    return(
      <div id="New">
        <form method="POST" autoComplete="off" id="newform" onSubmit={this.props.handleSubmit}>
          <input type="text" value={this.props.title} onChange={this.props.handleChangetitle} name="title" id="title"></input>
          <hr id="postseparator"></hr>
          <textarea id="postcontent" value={this.props.content}  onChange={this.props.handleChangecontent} name="postcontent" rows="10"></textarea>
          <input type="submit" className="formsubmit" value="Publish" name="publish"></input>
        </form>
      </div>
    )
  }
}
