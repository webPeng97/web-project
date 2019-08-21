import React, { Component  } from 'react'
import { Button } from 'antd'
import NoMatchImg from '@img/404.png'
import Cloud from '@img/404_cloud.png'
import './404.scss'

class NoMatch extends Component {
  state = {
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="wscn-http404-container">
        <div className="wscn-http404">
          <div className="pic-404">
            <img className="pic-404__parent" src={NoMatchImg} alt="404" />
            <img className="pic-404__child left" src={Cloud} alt="404" />
            <img className="pic-404__child mid" src={Cloud} alt="404" />
            <img className="pic-404__child right" src={Cloud} alt="404" />
          </div>
          <div className="bullshit">
            <div className="bullshit__oops">OOPS!</div>
            <div className="bullshit__headline">您访问的页面不存在...</div>
            <div className="bullshit__info">请检查您输入的网址是否正确，请点击首页或以下按钮返回</div>
            <Button type="primary" onClick={() => {this.props.history.goBack()}}>返回</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default NoMatch
