import React, {Component} from 'react';
import './New.css';

export default class New extends Component {
  render(){
    return(
      <div id="New">
        <form method="POST" autocomplete="off" id="newform">
          <input type="text" name="title" id="title"></input>
          <hr id="postseparator"></hr>
          <textarea id="postcontent" name="postcontent" rows="10"></textarea>
          <input type="submit" className="formsubmit" value="Publish" name="publish"></input>
          <input type="submit" className="formsubmit" value="Save Draft" name="save"></input>
        </form>
      </div>
    )
  }
}
