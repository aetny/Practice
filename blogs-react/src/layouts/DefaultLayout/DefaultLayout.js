import React,{Component} from 'react';
import {HeadNav} from '../../common/HeadNav';
import {Route} from 'react-router-dom';
import {Home} from '../../routes/Home/Home';
import {About} from '../../routes/AboutMe/AboutMe'
import {Article} from '../../routes/ArticleShare/ArticleShare'
import {Resource} from '../../routes/ResourceShare/ResourceShare'
import './DefaultLayout.scss'
export class DefaultLayout extends Component{
  state = {
    name : {},
    style1 : {
      height:"40px",
      color:"#fff",
      backgroundColor:"#000"
    },
    style2 : {
      height:"50px",
      color:"#000",
      backgroundColor:"transfrom"
    },
  }
  handleChange(){
    console.log('111')
    // this.setState({
    //   name:(window.scrollY>100)?this.state.style1:this.state.style2
    // })
  }
  render(){
    console.log(this.state.name)
    return (
      <div id="DefaultLayout">
        <HeadNav bbb={this.state.name}/>
        <div className="content-wrap">
          <Route path={this.props.match.url + '/'} abc={this.handleChange.bind(this)} component={Home} exact></Route>
          <Route path={this.props.match.url + '/Resource'} component={Resource}></Route>
          <Route path={this.props.match.url + '/Article'} component={Article}></Route>
          <Route path={this.props.match.url + '/About'} component={About}></Route>
        </div>
      </div>
    )
  }
}