import React from 'react';
import './App.css';
import AppBar from './components/AppBar';
import SideMenu from './components/SideMenu';
import Content from './components/Content';

class App extends React.Component {
  state = {
    view:"welcome",
    user:"Agus"
  }
  viewhandler = (args) => {
    this.setState({view:args});
    console.log(this.state);
  }
  render(){
    return (
      <div className="App">
        <AppBar menubtnid="menubtn" />
        <div id="body">
          <SideMenu user={this.state.user} trigger="menubtn" viewhandler={this.viewhandler} mystate={this.state.view}/>
          <Content view={this.state.view} />
        </div>
      </div>
    )
  }
}

export default App;
