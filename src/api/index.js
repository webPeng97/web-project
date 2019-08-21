import axios from '../utils/request'

export function getRoleList (params) {
  return axios({
    url: 'system/role/getRoleList',
    method: 'post',
    params
  })
}
