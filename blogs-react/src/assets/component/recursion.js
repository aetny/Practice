import React , {Component} from 'react';

// let _click = (item,index)=>{
//   if(item.hasOwnProperty('child')){
//     return <li key={index} className={item}>{item.name}<ul>{item.child.map(_click)}</ul></li>
//   }else{
//     return <li key={index} className={item}>{item.name}</li>
//   }
// }
let _click = (data)=>{
  return data.map((item,index)=>{
    if(item.hasOwnProperty('child')){
      return <li key={index} className={item}>{item.name}<ul>{_click(item.child)}</ul></li>
    }else{
      return <li key={index} className={item}>{item.name}</li>
    }
  })
}
export class Recursion extends Component{
  render(){
    let list = this.props.data;
    console.log(this.props)
    console.log(_click(list))
    return(
      <div>
        <ul>
          {/* {list.map(_click)} */}
          {_click(list)}
        </ul>
      </div>
    )
  }
}