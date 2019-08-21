import React, { Component, Fragment  } from 'react'
import './Pin.scss'
import { Icon } from 'antd'
import {
  Link
} from 'react-router-dom'

class Pin extends Component {
  render () {
    let pinList = this.props.pinList
    return (
      <Fragment>
        {
          pinList.length > 0 ? (
            <div className="pin-wraper">
              {
                pinList.map(item => {
                  return (
                    <div className="pin" key={item.id}>
                      <Link className="link-block" to={`home/pin/details/${item.id}`}>
                        <div className="pin-title">
                          <Icon type="fire" theme="twoTone" twoToneColor="#eb2f96" />
                          {item.title}
                        </div>
                        <div className="pin-content">
                          <div className="pin-img">
                            <img className="logo-img" src={item.pinImg} alt={item.id} /></div>
                          <div className="pin-warp">
                            <div className="pin-warp-brief">{item.brief}</div>
                            <div className="pin-warp-info">
                              <div className="pin-warp-info-author">
                                <Icon type="read" theme="filled" />
                                {item.author}
                              </div>
                              <div className="pin-warp-info-tags">
                                <Icon type="tags" theme="filled" />
                                {item.tags}
                              </div>
                              <div className="pin-warp-info-time">
                                <Icon type="calendar" theme="filled" />
                                {item.time}
                              </div>
                              <div className="pin-warp-info-like">
                                <Icon type="heart" theme="filled" />
                                {item.likeNum}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          ) : null
        }
      </Fragment>
    )
  }
}

export default Pin
