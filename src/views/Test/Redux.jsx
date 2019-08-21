import React, { Component, Fragment  } from 'react'
import { connect } from 'react-redux'
import { setPageTitle, setInfoList } from '../../store/actions.js'

class TRedux extends Component {

  componentDidMount () {
    document.title = 'TestRedux'
    // console.log('this.props1', this.props)
    let { setPageTitle, setInfoList } = this.props // es6 解构赋值
    
    // 触发setPageTitle action
    setPageTitle('这是修改redux中pageTitle的值')
    
    // 触发setInfoList action
    setInfoList()
  }

  render () {
    // console.log('this.props2', this.props)
    // 从props中解构store
    let { pageTitle, infoList } = this.props
    
    // 使用store
    return (
      <Fragment>
        <h1>{pageTitle}</h1>
        {
            infoList.length > 0 ? (
                <div className="my-list">
                    {
                      infoList.map(item => {
                          return (
                            <p extra={item.id} key={item.id}>{item.name}</p>
                          )
                      })
                    }
                </div>
            ):null
        }
      </Fragment>
    )
  }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    pageTitle: state.pageTitle,
    infoList: state.infoList
  }
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPageTitle (data) {
        // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
        dispatch(setPageTitle(data))
        // 执行setPageTitle会返回一个函数
        // 这正是redux-thunk的所用之处:异步action
        // 上行代码相当于
        /*dispatch((dispatch, getState) => {
            dispatch({ type: 'SET_PAGE_TITLE', data: data })
        )*/
    },
    setInfoList (data) {
        dispatch(setInfoList(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TRedux)
