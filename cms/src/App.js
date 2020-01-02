import React from 'react';
import './App.css';
import AppBar from './components/AppBar';
import SideMenu from './components/SideMenu';
import Content from './components/Content';

class App extends React.Component {
  state = {
    view:"welcome",
    mode:"New",
    user:"Agus",
  }
  viewhandler = (args) => {
    this.setState({view:args});
    this.ContentElement.current.wipe();
    console.log(this.state);
  }
  setmode = (args) => {
    this.setState({mode:args});
  } 
  ContentElement = React.createRef();
  render(){
    return (
      <div className="App">
        <AppBar menubtnid="menubtn" />
        <div id="body">
          <SideMenu user={this.state.user} trigger="menubtn" viewhandler={this.viewhandler} mystate={this.state.view} setmode={this.setmode}/>
          <Content ref={this.ContentElement} view={this.state.view} viewhandler={this.viewhandler} mode={this.state.mode} setmode={this.setmode} title={this.state.title} content={this.state.content}/>
        </div>
      </div>
    )
  }
}

export default App;
