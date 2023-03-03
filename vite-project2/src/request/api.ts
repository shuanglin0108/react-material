import request from './request'

// 类型别名-不可重复-交叉，接口名-可重复
interface AdminLoginData {
  password: string,
  username: string
}

// interface AdminLoginRes {
//   code: number,
//   data: {
//     token: string,
//     tokenHead: string
//   },
//   message: string
// }

type PromiseRes<T> = Promise<ManageResult<T>>

interface ManageResult<T = {}> {
  code: number,
  data: T
  // message: string
}

interface AdminListParams {
  keyword: string,
  pageNum: number,
  pageSize: number
}

// 登录返回接口
interface AdminLoginRes {
  token: string,
  tokenHead: string
}

// 当前用户信息
interface AdminInfoRes {
  menus: []
}

// 登录返回token
export const adminLoginApi = (data: AdminLoginData): PromiseRes<AdminLoginRes> => request.post('/admin/login', data)

// 获取当前登录用户信息
export const getAdminInfoApi = (): PromiseRes<AdminInfoRes> => request.get('/admin/info')

// 获取用户数据列表
export const getAdminLists = (data: AdminListParams): PromiseRes<{ list: {}[] }> => request.get('/admin/list', { params: data })