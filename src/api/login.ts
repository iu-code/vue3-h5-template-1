import { get, post, handleDelete } from '@/utils/https'

/**
 * @description 发送验证码
 * @export
 * @return {*}
 */
export async function sendMsg (params: any) {
  return get('/api/sys/auth/emailCode', params)
}

/**
 * @description 发送修改钱包验证码
 * @export
 * @return {*}
 */
export async function sendWalletCode () {
  return get('/api/wallet/user/sendCode')
}

/**
 * @description: 注册
 * @param {*} params
 * @return {*}
 */
export async function authRegister (params: any) {
  return post('/api/sys/auth/register', params)
}

/**
 * @description: 登录
 * @param {*} params
 * @return {*}
 */
export async function authLogin (params: any) {
  return post('/api/sys/auth/login', params)
}

/**
 * @description: 达人批量认证
 * @param {*} params
 * @return {*}
 */
export async function getInfluencerBatchSaveOrUpdate (params: any) {
  return post('/api/influencer/batchSaveOrUpdate', params)
}

/**
 * @description: 达人单个认证
 * @param {*} params
 * @return {*}
 */
export async function getInfluencerSaveOrUpdate (params: any) {
  return post('/api/influencer/saveOrUpdate', params)
}

/**
 * @description: 获取用户达人列表
 * @param {*} params
 * @return {*}
 */
export async function getInfluencerListByUser () {
  return get('/api/influencer/listByUser')
}

/**
 * @description: 修改支付密码
 * @param {*} params
 * @return {*}
 */
export async function getUpdateWalletPassword (params: any) {
  return post('/api/wallet/user/updateWalletPassword', params)
}

/**
 * @description: 修改登录密码
 * @param {*} params
 * @return {*}
 */
export async function getResetPass (params: any) {
  return post('/api/sys/auth/resetPass', params)
}

/**
 * @description: 创建钱包
 * @param {*} params
 * @return {*}
 */
export async function getWalletCreate (params: any) {
  return post('/api/wallet/user/create', params)
}

/**
 * @description: 获取用户信息
 * @param {*} params
 * @return {*}
 */
export async function getSysUserinfo () {
  return get('/api/sys/user/info')
}

/**
 * @description: 信息设置
 * @param {*} params
 * @return {*}
 */
export async function getSysSetting (params: any) {
  return post('/api/sys/user/setting', params)
}

/**
 * @description: 获取达人用户信息
 * @param {*} params
 * @return {*}
 */
export async function getInfUserinfo () {
  return get('/api/influencer/user/getUserInfo')
}

/**
 * @description: 修改达人用户信息
 * @param {*} params
 * @return {*}
 */
export async function getInfSetting (params: any) {
  return post('/api/influencer/user/updateUserInfo', params)
}

export async function getInfluencerOauthState() {
  return get('/api/influencer/oauth/getState')
}

/**
 * @description 删除达人认证平台
 * @export
 * @return {*}
 */
export async function delByPlatform(params: any) {
  return handleDelete('/api/influencer/delByPlatform', params)
}