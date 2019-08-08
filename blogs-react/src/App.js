import React ,{ Component } from 'react';
import {RouterWrap} from './router';
import './App.css';
export class App extends Component{
  render(){
    return (
      <div className="App">
        <RouterWrap></RouterWrap>
      </div>
    )
  }
}
