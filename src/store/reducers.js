// 二、它就是将来真正要用到的数据
import { combineReducers } from 'redux' // 工具函数，用于组织多个reducer，并返回reducer集合
import defaultState from './state.js'

let initValue = {
  loading:false,
}

function globalLoading (state = initValue, action) {
  switch (action.type) {
    case 'SHOW_LOADING':
      return {
        ...state,
        loading:action.data
      }
    default:
      return state
  }
}

// 一个reducer就是一个函数
function pageTitle (state = defaultState.pageTitle, action) {
  // 不同的action有不同的处理逻辑
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return action.data
    default:
      return state
  }
}

function infoList (state = defaultState.infoList, action) {
  switch (action.type) {
    case 'SET_INFO_LIST':
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  pageTitle,
  infoList,
  globalLoading
})
