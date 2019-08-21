// 三、操作reducer
import { getRoleList } from '../api'

export function setGlobalLoading (data) {
  return (dispatch, getState) => {
    dispatch({ type: 'SHOW_LOADING', data: data })
  }
}

// action也是函数
export function setPageTitle (data) {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_PAGE_TITLE', data: data })
  }
}

export function setInfoList (data) {
  return (dispatch, getState) => {
    // 使用axios实现异步请求
    getRoleList().then( res => {
      dispatch({ type: 'SET_INFO_LIST', data: res.data })
    })
  }
}
