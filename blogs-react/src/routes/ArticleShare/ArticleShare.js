import React , {Component} from 'react';
import {SectionHeader} from '../Home/Header';
import { Cart } from "./Cart";
import './ArticleShare.scss';
import '../../assets/css/global.scss';
export class Article extends Component{
  render(){
    var arr = [1,2,1,1,1]
    return (
      <div id="ArticleShare" className="wrapper">
        <SectionHeader />
        <div className="section Article-list">
          {arr.map((item,index)=>{
            return <Cart key={index}/>
          })}
        </div>
      </div>
    )
  }
}