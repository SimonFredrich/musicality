import React, {Component} from 'react';
import './New.css';

export default class New extends Component {
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
  handleChangetitle = (e) => {
    this.setState({title:e.target.value});
  }
  handleChangecontent = (e) =>{
    this.setState({content:e.target.value});
  }
  render(){
    return(
      <div id="New">
        <form method="POST" autoComplete="off" id="newform" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} onChange={this.handleChangetitle} name="title" id="title"></input>
          <hr id="postseparator"></hr>
          <textarea id="postcontent" value={this.state.content}  onChange={this.handleChangecontent} name="postcontent" rows="10"></textarea>
          <input type="submit" className="formsubmit" value="Publish" name="publish"></input>
          <input type="submit" className="formsubmit" value="Save Draft" name="save"></input>
        </form>
        {this.state.list.map(document=>{return(
        <>
        <h5>{document.title}</h5>
        <p>{document.content}</p>
        </>
        )})}
      </div>
    )
  }
}
