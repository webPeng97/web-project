import React, { Component, Fragment  } from 'react'
import {
  Link
} from 'react-router-dom'
import { Icon } from 'antd'
import './Head.scss'
import Logo from '@img/logo.png'

class Head extends Component {
  state= {
    active: 0
  }
  render () {
    let navList = [
      {
        name: '首页',
        path: '/home',
        icon: 'bank'
      },
      {
        name: '404',
        path: '/404',
        icon: 'smile'
      },
      {
        name: '测试redux',
        path: '/test/redux',
        icon: 'bell'
      },
      {
        name: '友情链接',
        path: '/home',
        icon: 'paper-clip'
      },
      {
        name: '关于我',
        path: '/home',
        icon: 'heart'
      }
    ]
    return (
      <Fragment>
        <header id="layout">
          <div className="container nav-container">
            <div className="logo">
              <img className="logo-img" src={Logo} alt="logo" />
            </div>
            <ul className="nav-link">
              {
                navList.map((item, index) => {
                  return (
                    <li
                    key={index}
                    className={index === this.state.active ? 'link link-active' : 'link' }
                    onClick={e => this.handleClick(index, e)}
                    >
                      <Link className="link-block"  to={item.path}>
                        {/* <Icon type={item.icon} theme={item.icon === 'heart' ? 'twoTone' : ''} twoToneColor="#AA00FF" /> */}
                        <Icon type={item.icon} />
                        {item.name}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </header>
      </Fragment>
    )
  }

  handleClick (index) {
    this.setState({active: index})
  }
  
}

export default Head
