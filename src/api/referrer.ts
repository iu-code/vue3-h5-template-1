import { get, post } from '@/utils/https'

/**
 * @description 注册登录校验邀请码
 * @export
 * @return {*}
 */
export async function checkReferralCode (params: any) {
  return get('/api/referral/code/checkReferralCode', params)
}