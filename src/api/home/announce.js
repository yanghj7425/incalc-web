import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/announce/list',
    method: 'get',
    params
  })
}
