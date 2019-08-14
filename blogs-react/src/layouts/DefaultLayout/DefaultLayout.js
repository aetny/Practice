import React,{Component} from 'react';
import {HeadNav} from '../../common/HeadNav';
import {Route} from 'react-router-dom';
import {Home} from '../../routes/Home/Home';
import {About} from '../../routes/AboutMe/AboutMe'
import {Article} from '../../routes/ArticleShare/ArticleShare'
import {Resource} from '../../routes/ResourceShare/ResourceShare'
import './DefaultLayout.scss'
export class DefaultLayout extends Component{
  handleScroll(){
    if(window.scrollY>500){
      
    }
  }
  componentDidMount(){
    document.addEventListener('scroll',this.handleScroll);
  }
  componentWillUnmount(){
    document.removeEventListener('scroll',this.aaa);
  }
  render(){
    return (
      <div id="DefaultLayout">
        <HeadNav />
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