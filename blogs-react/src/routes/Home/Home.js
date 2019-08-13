import React , {Component} from 'react';
import {Recursion} from '../../assets/component/recursion'
import {Section} from './section'
import './Home.scss'

let data = [
  {
      name: 'AAA',
      child: [
          { name: 'a1', child: [{ name: 'a1-1' }, { name: 'a1-2' }] },
          { name: 'a2' },
          { name: 'a3', child: [{ name: 'a3-1' }, { name: 'a3-2', child: [{ name: 'a3-2-1' }, { name: 'a3-2-2' }] }] }
      ]
  },
  {
      name: 'BBB',
      child: [{ name: 'b1' }, { name: 'b2' }, { name: 'b3' }]
  },
  {
      name: 'CCC',
      child: [{ name: 'c1' }, { name: 'c2' }, { name: 'c3' }]
  },
  {
      name: 'DDD',
      child: [{ name: 'd1' }]
  }
],
data1 = [
  {
      name: 'BBB',
      child: [{ name: 'b1' }, { name: 'b2' }, { name: 'b3' }]
  },
  {
      name: 'CCC',
      child: [{ name: 'c1' }, { name: 'c2' }, { name: 'c3' }]
  },
],
data2 = [
  {
      name: 'BBB',
      child: [{ name: 'b1' }, { name: 'b2' }, { name: 'b3' }]
  },
  {
      name: 'CCC',
      child: [{ name: 'c1' }, { name: 'c2' }, { name: 'c3' }]
  },
  {
      name: 'DDD',
      child: [{ name: 'd1' }]
  }
];;

export class Home extends Component{
  render(){
    return (
      <div id="Home">
        {/* section-header */}
        <div className="section section-header">
          <div className="section-bg poster"></div>
          <div className="section-title">
            <div>Welcome Home</div>
          </div>
        </div>
        {/* section-content */}
        <div className="section section-content">
          <div className="_content">
            <div className="content">
              <div className="inner">
                <Section abc={data} />
                <Section abc={data1} />
                <Section abc={data2} />
              </div>
              <div className="pagevavi">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}