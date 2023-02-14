/**
 * 处理await成功失败信息
 * 参考：https://juejin.cn/post/6844903767129718791
 * @param {*} promise
 */

export function awaitWrap<T, U = any>(promise: Promise<T>): Promise<[U | null, T | null]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, null]>((err) => [err, null])
}

/*
 * 第一种方法：
 * @param paramName
 * 用来获取url中的某个参数
 */
export const getQueryParamByKey = (paramName: string) => {
  let url = document.location.toString()
  // 如果url中有特殊字符则需要进行一下解码
  url = decodeURI(url)
  const arrObj = url.split('?')
  if (arrObj.length > 1) {
    const arrPara = arrObj[1].split('&')
    let arr
    for (let i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split('=')
      if (arr != null && arr[0] == paramName) {
        return decodeURIComponent(arr[1])
      }
    }
    return ''
  } else {
    return ''
  }
}
/*
 * 用来获取url中的所有参数
 * let url = 'http://192.168.1.122:9020/?appId=wxf4b72971eacba4d6&loginScene=1#/'
 */
export const getQueryParams = <T extends {}>(url = document.location.toString()) => {
  // let url =
  // 如果url中有特殊字符则需要进行一下解码
  url = decodeURI(url)
  const arr1 = url.split('?')
  const obj = {}
  if (arr1.length > 1) {
    const index = arr1[1].indexOf('#')
    arr1[1] = index == -1 ? arr1[1] : arr1[1].slice(0, index)
    const arr2 = arr1[1].split('&')
    for (let i = 0; i < arr2.length; i++) {
      const curArr: string[] = arr2[i].split('=')
      obj[curArr[0]] = decodeURIComponent(curArr[1])
    }
  }
  return obj as { [key: string]: T }
}

/**
 * 判断是安卓还是iOS
 */
export const phoneModel = () => {
  const u = navigator.userAgent
  const app = navigator.appVersion
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 //android终端或者uc浏览器
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
  if (isAndroid) return 'android'
  if (isiOS) return 'ios'
}
/**
 * 判断是否是微信浏览器
 */
export const isWeChat = () => {
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  const ua = navigator.userAgent
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  return !!ua.match(/MicroMessenger/i)
}

// 校验邮箱
export const checkEmailFormat = (inputEmail: string) => {
  const email = inputEmail.trim()
  if (!email) {
    return {
      pass: false,
      msg: 'Please enter your email'
    }
  }
  if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)) {
    return {
      pass: false,
      msg: 'Invalid email format'
    }
  }
  return {
    pass: true,
    msg: '',
    email
  }
}
// 校验昵称
export const checkNicknameFormat = (nickName: string) => {
  if (!nickName) {
    return 'Please enter your nickname'
  }
  if (!/^[0-9a-zA-Z]*$/g.test(nickName)) {
    return 'The name can only contain letters and numbers, no special characters'
  }
  return false
}

export const checkContactName = (checkContactName: string) => {
  if (!checkContactName) {
    return {
      pass: true,
      msg: ''
    }
  }
  if (!/^[0-9a-zA-Z]{1,60}/g.test(checkContactName)) {
    return {
      pass: false,
      msg: 'The name can only contain letters and numbers, no special characters'
    }
  }
  return {
    pass: true,
    msg: ''
  }
}

// 校验密码
export const checkPassword = (val: string) => {
  if (/^(?![\d]+$)(?![a-z]+$)(?![A-Z]+$)(?![~\\!@#$%\\^&\\*\\(\\)_+\-=?.,`]+$)[\da-zA-z~\\!@#$%\\^&\\*\\(\\)_+\-=?.,`]{8,20}$/.test(val)) {
    return /\d+/.test(val) && /[a-zA-z]+/.test(val)
  } else {
    return false
  }
}

/** 获取所有参数
* @returns json/object
*/
export const getQueryString = function (url?:string) {
  // 定义返回结果
  const result: {
    [s: string]: string
  } = {}
  // 获取url上的参数（使用decodeURIComponent对url参数进行解码）
  const herfUrl = url || decodeURIComponent(window.location.href) || ''
  const hash = herfUrl.split('?')[1] || ''
  const tempArr = hash !== '' ? hash.substr(0).split('&') : []
  tempArr.forEach((item) => {
    if (item) {
      // 将参数名和参数值拆分
      const itemArr = item.split('=')
      // 参数名作为key, 参数值为value
      result[itemArr[0]] = itemArr[1]
    }
  })
  return result
}