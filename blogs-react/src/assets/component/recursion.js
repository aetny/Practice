import React , {Component} from 'react';

// let _click = (item,index)=>{
//   if(item.hasOwnProperty('child')){
//     return <li key={index} className={item}>{item.name}<ul>{item.child.map(_click)}</ul></li>
//   }else{
//     return <li key={index} className={item}>{item.name}</li>
//   }
// }

export class Recursion extends Component{
  _click = (data)=>{
    return data.map((item,index)=>{
      if(item.hasOwnProperty('child')){
        return <li key={index} className={item}>{item.name}<ul>{this._click(item.child)}</ul></li>
      }else{
        return <li key={index} className={item}>{item.name}</li>
      }
    })
  }
  render(){
    let list = this.props.data;
    return(
      <div>
        <ul>
          {/* {list.map(_click)} */}
          {this._click(list)}
        </ul>
      </div>
    )
  }
}