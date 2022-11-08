import logo from './logo.svg';
import './App.css';
import React from 'react';
import First from './components/frst';
import {cardDetails} from "./datas/data";


class App extends React.Component{
  render(){
    return(
      <div>
        <First/>
      </div>
    )
  }
}

export default App;
