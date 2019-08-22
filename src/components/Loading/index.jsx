import React from 'react';
import { Spin } from 'antd';
import { connect } from 'react-redux';

function Loading(props){
  console.log('props.loading', props.loading)
  let display = props.loading ? 'flex' : 'none'
  return (
    <div style={{...style,display}}>
      <Spin tip="Loading..." size="large"></Spin>
    </div>
  )
}
const style = {
  position:'fixed',
  top:'0',
  left:'0',
  right:'0',
  bottom:'0',
  width:'100%',
  height:'100%',
  background:'rgba(255, 255, 255,.7)',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  color:'#fff',
  zIndex: '9999999'
}
export default connect(
  (state)=>{
    console.log('loading', state.globalLoading.loading)
    return {
      loading:state.globalLoading.loading
    }
  }
)(Loading)
