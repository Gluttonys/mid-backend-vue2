import {request2Get, request2Post} from '@/utils/request'
import qs from 'qs'

export function getUserList(offset = 0, limit = 30) {
  return request2Get({
    url: '/api-user/user-list',
    params: {
      offset,
      limit
    }
  })
}


export function toCreateUser(user) {
  delete user.id
  return request2Post({
    url: '/api-user/create-user',
    data: qs.stringify(user)
  })
}


export function toUpdateUser(user) {
  return request2Post({
    url: '/api-user/update-by-id',
    data: user
  })
}


export function toDelUser(id) {
  return request2Get({
    url: '/api-user/del-by-id',
    params: {id}
  })
}
