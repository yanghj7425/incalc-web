import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/ongoing/list',
    method: 'get',
    params
  })
}
