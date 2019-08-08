import React,{Component} from 'react';
import {Menu,Icon} from 'antd'
import './HeadNav.scss'

const {SubMenu} = Menu;

export class HeadNav extends Component{
  // constructor(){
  //   this.
  // };
  state = {
    current:'home',
  }
  render(){
    return (
      <div id="HeadNav">
        <div className="nav-wrap">
          <div className="nav-logo-wrap">
            <Icon type="global" className="nav-logo"></Icon>
          </div>
          <div className="nav-list-wrap">
            <Menu
              selectedKeys={[this.state.current]}
              mode="horizontal">
              <Menu.Item className="" key="home">
                <Icon type="bank" />
                首页
              </Menu.Item>
              <SubMenu key="aboutme" title={
                <span>
                  <Icon type="user" />
                  关于我
                </span>
              }>
                <Menu.Item key="setting1">
                  Option 1
                </Menu.Item>
                <Menu.Item key="setting2">
                  Option 2
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </div>
      </div>
    )
  }
}