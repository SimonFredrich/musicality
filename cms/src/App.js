import React from 'react';
import './App.css';
import AppBar from './components/AppBar';
import SideMenu from './components/SideMenu';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <AppBar menubtnid="menubtn" />
        <SideMenu trigger="menubtn" />
      </div>
    )
  }
}

export default App;
