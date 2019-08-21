import React, { Component  } from 'react'
import Pin from '@components/Pin/Pin'
import LayoutAboutLink from './components/About/Link'
import PinImg from '@img/pin.png'
import './Home.scss'

import {
  Route
} from 'react-router-dom'
import Details from '@views/Details'

class Home extends Component {
  state = {
    pinList: [
      {
        id: 1,
        title: '随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state （状态）',
        brief: `这些 state 可能包括服务器响应、缓存数据、
        本地生成尚未持久化到服务器的数据，也包括 UI 状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等。
        管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应
        model 以及另一个 model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么
        。state 在什么时候，由于什么原因，如何变化已然不受控制`,
        pinImg: PinImg,
        author: 'webPeng',
        tags: '前端',
        time: '2019-08-20',
        likeNum: '23'
      },
      {
        id: 2,
        title: '随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state （状态）',
        brief: `这些 state 可能包括服务器响应、缓存数据、
        本地生成尚未持久化到服务器的数据，也包括 UI 状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等。
        管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应
        model 以及另一个 model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么
        。state 在什么时候，由于什么原因，如何变化已然不受控制`,
        pinImg: PinImg,
        author: 'webPeng',
        tags: '前端',
        time: '2019-08-20',
        likeNum: '123'
      },
      {
        id: 3,
        title: '随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state （状态）',
        brief: `这些 state 可能包括服务器响应、缓存数据、
        本地生成尚未持久化到服务器的数据，也包括 UI 状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等。
        管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应
        model 以及另一个 model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么
        。state 在什么时候，由于什么原因，如何变化已然不受控制`,
        pinImg: PinImg,
        author: 'webPeng',
        tags: '前端',
        time: '2019-08-20',
        likeNum: '23'
      },
      {
        id: 4,
        title: '随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state （状态）',
        brief: `这些 state 可能包括服务器响应、缓存数据、
        本地生成尚未持久化到服务器的数据，也包括 UI 状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等。
        管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应
        model 以及另一个 model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么
        。state 在什么时候，由于什么原因，如何变化已然不受控制`,
        pinImg: PinImg,
        author: 'webPeng',
        tags: '前端',
        time: '2019-08-20',
        likeNum: '123'
      },
      {
        id: 5,
        title: '随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state （状态）',
        brief: `这些 state 可能包括服务器响应、缓存数据、
        本地生成尚未持久化到服务器的数据，也包括 UI 状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等。
        管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应
        model 以及另一个 model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么
        。state 在什么时候，由于什么原因，如何变化已然不受控制`,
        pinImg: PinImg,
        author: 'webPeng',
        tags: '前端',
        time: '2019-08-20',
        likeNum: '23'
      },
      {
        id: 6,
        title: '随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state （状态）',
        brief: `这些 state 可能包括服务器响应、缓存数据、
        本地生成尚未持久化到服务器的数据，也包括 UI 状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等。
        管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应
        model 以及另一个 model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么
        。state 在什么时候，由于什么原因，如何变化已然不受控制`,
        pinImg: PinImg,
        author: 'webPeng',
        tags: '前端',
        time: '2019-08-20',
        likeNum: '123'
      },
      {
        id: 7,
        title: '随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state （状态）',
        brief: `这些 state 可能包括服务器响应、缓存数据、
        本地生成尚未持久化到服务器的数据，也包括 UI 状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等。
        管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应
        model 以及另一个 model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么
        。state 在什么时候，由于什么原因，如何变化已然不受控制`,
        pinImg: PinImg,
        author: 'webPeng',
        tags: '前端',
        time: '2019-08-20',
        likeNum: '23'
      },
      {
        id: 8,
        title: '随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state （状态）',
        brief: `这些 state 可能包括服务器响应、缓存数据、
        本地生成尚未持久化到服务器的数据，也包括 UI 状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等。
        管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应
        model 以及另一个 model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么
        。state 在什么时候，由于什么原因，如何变化已然不受控制`,
        pinImg: PinImg,
        author: 'webPeng',
        tags: '前端',
        time: '2019-08-20',
        likeNum: '123'
      }
    ]
  }

  componentDidMount () {
  }

  render () {
    // console.log(this.props.match.url)
    return (
      <div id="home">
        <div className="home-left-wrap">
          <Route path={`${this.props.match.url}/pin/details/:id`} component={Details}/>
          <Route exact path={this.props.match.url} render={() => (
            <Pin pinList={this.state.pinList}/>
          )}/>
        </div>
        <div className="home-right-wrap">
          <LayoutAboutLink/>
        </div>
      </div>
    )
  }
}
export default Home
