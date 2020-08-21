// 防抖
export function debounce () {
    let timer = 0
    return function (callback, ms = 500) {
      clearTimeout(timer)
      timer = setTimeout(callback, ms)
    }
  }
  
  // 节流
  export function throttle () {
    let timer
    var begin = new Date().getTime()
    return function (method, delay = 500) {
      var current = new Date().getTime()
      clearTimeout(timer)
      if (current - begin >= delay) {
        method()
        begin = current
      } else {
        timer = setTimeout(method, delay)
      }
    }
  }