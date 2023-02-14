'use strict'
const origin = location.origin;
const env = origin.includes('idoleco') ? 1 : 0;// 0-测试环境  1-正式环境
let urlPre = env ? 'https://www.idoleco.com' : 'http://54.169.105.78'

const config = {
  env: env,
  LOC_URL: env ? 'https://www.idoleco.com' : 'http://54.169.105.78', // 跳转地址
  REPLACE_RESULT: env ? 'https://www.idoleco.com/api/influencer/oauth/getState' : 'http://idoleco.joymud.com/api/influencer/oauth/getState', // 获取授权码 (缺失正式地址)
  REGEDIT: urlPre + '/api/sys/auth/register', // 注册
  LOGIN: urlPre + '/api/sys/auth/login', // 登录
  PHONE_CODE: urlPre + '/api/sys/auth/emailCode', // 发送验证码
  SAVE_WALLET: urlPre + '/api/wallet/user/create', // 创建钱包
  CFT_STATUS: urlPre + '/api/influencer/listByUser', // 获取4种认证状态
  UPLOAD_LIKE: urlPre + '/api/influencer/oauth/checkDeepLink', // 获取tiktok短链接
  UPLOAD_SUBMIT: urlPre + '/api/influencer/oauth/checkUserInputData', // 提交tiktok名称
  thirdUrl: env ? [
    'https://twitter.com/i/oauth2/authorize?code_challenge=challenge&code_challenge_method=PLAIN&response_type=code&client_id=T3FSQnlxanBxQVU5T1N4WlQ4OUs6MTpjaQ&redirect_uri=https%3A%2F%2Fidoleco.com%2Fapi%2Finfluencer%2Foauth%2Ftwitter&scope=tweet.read%20users.read&state=',
    'https://api.instagram.com/oauth/authorize?client_id=688161209445887&redirect_uri=https://idoleco.com/api/influencer/oauth/instagram&scope=user_profile&response_type=code&state=',
    'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&client_id=447845781940-8u9b3glsr6tvqfhomr76olvdrvs4hop2.apps.googleusercontent.com&redirect_uri=https://idoleco.com/api/influencer/oauth/youtube&response_type=code&scope=https://www.googleapis.com/auth/youtube.readonly&state=',
    'https://www.tiktok.com/auth/authorize/?client_key=aw2bdgw4vd4zpg48&scope=user.info.basic&redirect_uri=https://idoleco.com/api/influencer/oauth/tiktok&response_type=code&state='
  ] : [
    'https://twitter.com/i/oauth2/authorize?code_challenge=challenge&code_challenge_method=PLAIN&response_type=code&client_id=RTJvdDEyUHJxdjBXOTdXZ2VXVmg6MTpjaQ&redirect_uri=https%3A%2F%2Ftest-www-ap-southeast-1.idoleco.com%2Fapi%2Finfluencer%2Foauth%2Ftwitter&scope=tweet.read%20users.read&state=',
    'https://api.instagram.com/oauth/authorize?client_id=688161209445887&redirect_uri=https://test-www-ap-southeast-1.idoleco.com/api/influencer/oauth/instagram&scope=user_profile&response_type=code&state=',
    'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&client_id=1077622822973-t1m6bjlmkden20a2rcm5n3paq9plc2pj.apps.googleusercontent.com&redirect_uri=https://test-www-ap-southeast-1.idoleco.com/api/influencer/oauth/youtube&response_type=code&scope=https://www.googleapis.com/auth/youtube.readonly&state=',
    'https://www.tiktok.com/auth/authorize/?client_key=awsl9bts3cd73ul6&scope=user.info.basic&redirect_uri=http://test.joymud.com/api/influencer/oauth/tiktok&response_type=code&state='
    // 'https://www.tiktok.com/auth/authorize?client_key=awsl9bts3cd73ul6&scope=user.info.basic&redirect_uri=https%3A%2F%2Ftest.joymud.com%2Fapi%2Finfluencer%2Foauth%2Ftiktok%3Fstate%3D7783d6c401c61cb40e93726291f54b6bf9ffa7779506d0f6--http%253A%252F%252Ftest.joymud.com%253A8000%252FsocialLink%253Ftype%253Dbind&response_type=code'
  ],
  contryCode: [
    "+86", "+93", "+355", "+213", "+376", "+244", "+1264",
    "+247", "+1268", "+54", "+374", "+297", "+61", "+43", "+994",
    "+1242", "+973", "+880", "+1246", "+375", "+32", "+501", "+229",
    "+1441", "+975", "+591", "+387", "+267", "+55", "+673", "+359",
    "+226", "+257", "+855", "+237", "+1", "+238", "+1345", "+236",
    "+235", "+56", "+57", "+269", "+242", "+243", "+682", "+506",
    "+225", "+385", "+53", "+357", "+420", "+45", "+253", "+1767",
    "+1809", "+593", "+20", "+503", "+372", "+251", "+298", "+679",
    "+358", "+33", "+594", "+689", "+241", "+220", "+995", "+94",
    "+233", "+350", "+30", "+299", "+1473", "+590", "+1671", "+502",
    "+240", "+224", "+592", "+509", "+504", "+852", "+95",
    "+36", "+354", "+91", "+62", "+98", "+964", "+353", "+972",
    "+93", "+1876", "+81", "+962", "+7", "+254", "+383", "+965",
    "+996", "+856", "+371", "+961", "+266", "+231", "+218", "+423",
    "+370", "+352", "+853", "+389", "+261", "+265", "+60", "+960",
    "+223", "+356", "+596", "+222", "+230", "+262", "+52", "+373",
    "+377", "+976", "+382", "+1664", "+212", "+258", "+264", "+977",
    "+31", "+599", "+687", "+64", "+505", "+227", "+234", "+47",
    "+968", "+92", "+970", "+507", "+675", "+595", "+51", "+63", "+48",
    "+351", "+1", "+974", "+262", "+40", "+7", "+250", "+684", "+685",
    "+378", "+239", "+966", "+221", "+381", "+248", "+232", "+65",
    "+421", "+386", "+27", "+82", "+34", "+94", "+1869", "+1758",
    "+1784", "+249", "+597", "+268", "+46", "+41", "+963", "+886",
    "+992", "+255", "+66", "+670", "+228", "+676", "+1868", "+216",
    "+90", "+993", "+1649", "+256", "+380", "+971", "+44", "+1",
    "+598", "+998", "+678", "+58", "+84", "+1340", "+967", "+260",
    "+263"
  ]
}

export default config
