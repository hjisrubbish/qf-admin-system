import request from '@/utils/request'

export function getUserInfo(pageNum, pageSize, data = {}) {
  return request({
    url: '/user/getAllUsers',
    method: 'get',
    params: {
      pageNum,
      pageSize,
      username: data.username,
      realName: data.realName,
      status: data.status,
      phone: data.phone,
      deptId: data.deptId
    }
  })
}

export function editUser(data) {
  return request({
    url: '/user/updateUser',
    method: 'post',
    data: {
      deptId: data.deptId,
      username: data.username,
      realName: data.realName,
      email: data.email,
      phone: data.phone,
      userId: data.userId,
      status: data.status,
      roleIds: data.roleIds
    }
  })
}

export function createUser(data) {
  return request({
    url: '/user/addUser',
    method: 'post',
    data: {
      deptId: data.deptId,
      username: data.username,
      realName: data.realName,
      email: data.email,
      phone: data.phone,
      sex: 0,
      status: data.status,
      password: data.password,
      roleIds: []
    }
  })
}

export function editPassword(data) {
  return request({
    url: '/user/changePassword',
    method: 'post',
    data: {
      userId: data.userId,
      oldPassword: data.oldPassword,
      newPassword: data.newPassword
    }
  })
}

export function changeStatus(userId, status) {
  return request({
    url: '/user/changeStatus',
    method: 'post',
    data: {
      userId: userId,
      status: status
    }
  })
}
