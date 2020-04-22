import request from '@/utils/request'

const api_name = '/eduservice/edu-teacher'
export default {

  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj// 不能用data:
    })
  },

  removeById(teacherId) {
    return request({
      url: `${api_name}/${teacherId}`,
      method: 'delete'
    })
  },

  save(teacher) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: teacher
    })
  },

  getById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  },
  // 修改讲师对象
  updateById(teacher) {
    return request({
      url: `${api_name}/${teacher.id}`,
      method: 'put',
      data: teacher
    })
  }

}
