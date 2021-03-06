import { AlertService } from 'app/declarations/alert/alert.service'
import * as fetchJsonp from 'fetch-jsonp'

export function jsonp(url, callbackname = 'callback') {
  const promise = fetchJsonp(url, {
    jsonpCallback: callbackname
  })
    .then(d => d.json())
    .then((res: any) => {
      if (res.code === 0) {
        return res
      } else {
        Promise.reject(res)
      }
    }).catch(() => {
      AlertService.show('yqq api error')
    })

  return promise
}
