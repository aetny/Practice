import React , {Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import {DefaultLayout} from './layouts/DefaultLayout/DefaultLayout';
import {LoginUser} from './layouts/LoginUser/LoginUser';
export class RouterWrap extends Component{
  render(){
    return (
      <div id="router">
        <HashRouter>
          <Switch>
            <Route path="/" component={DefaultLayout} exact></Route>
            <Route path="/login" component={LoginUser}></Route>
            <Route path="/login1" component={DefaultLayout}></Route>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}