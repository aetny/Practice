import React,{Component} from 'react';
import {Menu,Icon} from 'antd';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import './HeadNav.scss'

const {SubMenu} = Menu;

export class HeadNav extends Component{
  // constructor(){
  //   this.
  // };
  state = {
    current:'home',
  }
  handClick=(e)=>{
    this.setState({
      current:e.key
    })
  }
  handClickGlobal=()=>{
    this.setState({
      current:'home'
    })
  }
  render(){
    return (
      <div id="HeadNav">
        <div className="nav-wrap">
          <div className="nav-logo-wrap"
            onClick={()=>this.handClickGlobal()}>
              <Link to="/login/">
                <Icon type="global" className="nav-logo"></Icon>
              </Link>
          </div>
          <div className="nav-list-wrap">
            <Menu
              selectedKeys={[this.state.current]}
              mode="horizontal"
              className="nav-list-menu"
              onClick={(event)=>this.handClick(event)}>
              <Menu.Item className="" key="home">
                <Link to="/login/">
                  <Icon type="bank" />
                  首页
                </Link>
                
              </Menu.Item>
              <Menu.Item className="" key="articleShare">
                <Link to="/login/Article">
                  <Icon type="read" />
                  文章分享
                </Link>
              </Menu.Item>
              <Menu.Item className="" key="resourceShare">
                <Link to="/login/Resource">
                  <Icon type="read" />
                  资源分享
                </Link>
              </Menu.Item>
              <SubMenu key="aboutMe" title={
                <span>
                  <Icon type="user" /> 
                  关于我
                </span>
              }>
                <Menu.Item key="setting1">
                  <Link to="/login/About">
                    <Icon type="read" />
                    Option 1
                </Link>
                </Menu.Item>
                <Menu.Item key="setting2">
                  <Link to="/login/About">
                    <Icon type="read" />
                    Option 2
                  </Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </div>
      </div>
    )
  }
}