import service from './request'

export function post (url: string, data?: any, error?: any) {
  return new Promise((resolve, reject) => {
    service.post(url, data).then(res => {
      resolve(res.data.result)
    }, err => {
      err = error || err
      reject(err)
    })
  })
}
export function get (url: string, params?: any, error?: any) {
  return new Promise((resolve, reject) => {
    service.get(url, { params }).then(res => {
      resolve(res.data.result)
    }, err => {
      err = error || err
      reject(err)
    })
  })
}
export function handleDelete (url: string, params?: any, error?: any) {
  return new Promise((resolve, reject) => {
    service.delete(url, { params }).then(res => {
      resolve(res.data.result)
    }, err => {
      err = error || err
      reject(err)
    })
  })
}
export function invoke (url: string, method: string, data: any, option?: any) {
  option = option || {};
  let headers = {
    'content-type': 'application/json;charset=UTF-8'
  };
  if (option.headers) headers = option.headers;
  const ajaxSetting: any = {
    url: url,
    method: method,
    headers: headers
  };
  if (method.toLocaleLowerCase() === 'get') {
    ajaxSetting.params = data;
  }
  return new Promise((resolve, reject) => {
    service.request(ajaxSetting).then(function (result) {
      console.log(result, 'result')
      resolve(result)
    }).catch(function (error) {
      resolve({})
      console.log(error)
    })
  })
}