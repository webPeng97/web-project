import React, { Component, Fragment  } from 'react'
import './Link.scss'
import { Icon } from 'antd'

class Link extends Component {
  state = {
  }

  componentDidMount () {
  }

  render () {
    return (
      <Fragment>
        <div className="about-link">
          <div className="about-link-name">
            <span className="text">yibo</span>
          </div>
          <div className="about-link-title">你这个问题充钱就能解决</div>
          <div className="about-link-go">
            <div className="github">
              <Icon type="github" />
            </div>
            <div className="weibo">
              <Icon type="weibo-circle" />
            </div>
            <div className="chrome">
              <Icon type="chrome" />
            </div>
            <div className="instagram">
              <Icon type="instagram" />
            </div>
          </div>
        </div>
        <div className="about-link">
          <div className="about-link-name xiaozhan">
            <span className="text">xiaozhan</span>
          </div>
          <div className="about-link-title">你这个问题充钱就能解决</div>
          <div className="about-link-go">
            <div className="github">
              <Icon type="github" />
            </div>
            <div className="weibo">
              <Icon type="weibo-circle" />
            </div>
            <div className="chrome">
              <Icon type="chrome" />
            </div>
            <div className="instagram">
              <Icon type="instagram" />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Link
