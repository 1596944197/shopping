export function debounce(fun, delay = 10) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this,);
    }, delay);
  };
}

/*
事件监听相关方法,防抖
*/


/* 
封装一个日期函数
*/
export function formatTime(timestamp, number) {
  var date = new Date(timestamp)
  //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-'
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())

  var response = Y + M + D + h + m + s
  if (number) {
    return response.substring(0, number)
  }
  return response
}
