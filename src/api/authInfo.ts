import { get, post } from '@/utils/https'

/**
 * @description 获取国家列表
 * @export
 * @return {*}
 */
export async function getCountryDic () {
  return get('/api/influencer/countrydic/all')
}

/**
 * @description 获取行业列表
 * @export
 * @return {*}
 */
export async function getIndustryDic () {
  return get('/api/influencer/industryDic/all')
}

/**
 * @description 获取社媒字典列表
 * @export
 * @return {*}
 */
export async function getSocialTagDic () {
  return get('/api/influencer/socialTagDic/all')
}

/**
 * @description 获取语言列表
 * @export
 * @return {*}
 */
export async function getLanguageDic () {
  return get('/api/influencer/languageDic/all')
}

/**
 * @description 获取时区列表
 * @export
 * @return {*}
 */
export async function getTimezoneDic () {
  return get('/api/influencer/timezonedic/all')
}

/**
 * @description 获取tiktok短链
 * @export
 * @return {*}
 */
export async function getShortLink () {
  return get('/api/influencer/oauth/checkDeepLink')
}

/**
 * @description 提交tiktok用户名称
 * @export
 * @return {*}
 */
export async function getCheckUserInputData (params: any) {
  return get('/api/influencer/oauth/checkUserInputData', params)
}

/**
 * @description 提交tiktok用户名称
 * @export
 * @return {*}
 */
export async function getInfluencerListByUser () {
  return get('/api/influencer/listByUser')
}

/**
 * @description: 保存或者更新达人信息-V2
 * @param {*} params
 * @return {*}
 */
export async function getSaveOrUpdateUserInfo (params: any) {
  return post('/api/influencer/v2/saveOrUpdate', params)
}