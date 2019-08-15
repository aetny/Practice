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
      backgroundColor:"#000"
    },
    style2 : {
      backgroundColor:"transparent"
    },
  }
  handleChange=()=>{
    let {style1,style2} = this.state;
    this.setState({
      name:(window.scrollY>100)?style1:style2
    })
  }
  
  componentDidMount(){
    document.addEventListener('scroll',this.handleChange);
  }
  componentWillUnmount(){
    document.removeEventListener('scroll',this.handleChange);
  }
  render(){
    return (
      <div id="DefaultLayout">
        <HeadNav bgChange={this.state.name}/>
        <div className="content-wrap">
          <Route path={this.props.match.url + '/'} component={Home} exact></Route>
          <Route path={this.props.match.url + '/Resource'} component={Resource}></Route>
          <Route path={this.props.match.url + '/Article'} component={Article}></Route>
          <Route path={this.props.match.url + '/About'} component={About}></Route>
        </div>
      </div>
    )
  }
}