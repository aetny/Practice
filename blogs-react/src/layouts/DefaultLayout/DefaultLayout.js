import React,{Component} from 'react';
import {HeadNav} from '../../common/HeadNav'
import './DefaultLayout.scss'
export class DefaultLayout extends Component{
  render(){
    return (
      <div id="DefaultLayout">
        <HeadNav />
        Hello World
        <p className="test">1</p>
        <p>2</p>
      </div>
    )
  }
}