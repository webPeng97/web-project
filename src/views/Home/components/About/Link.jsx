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
        <div className="notice">
          <div className="notice-title">一点点信息</div>
          <div className="notice-content">
            个人网站，涉及技术栈：<br/>
            react+redux+scss+axios+antd
          </div>
        </div>

        <div className="day-push">
          <div className="push-title">每日推送</div>
          <div className="push-content">
            神马都木有...
          </div>
        </div>

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

        <div className="tags">
          <div className="tags-title">标签分类</div>
          <div className="tags-content">
            <div className="tags-list">vue</div>
            <div className="tags-list">react</div>
            <div className="tags-list">js</div>
            <div className="tags-list">nodejs</div>
            <div className="tags-list">css</div>
            <div className="tags-list">html</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Link
