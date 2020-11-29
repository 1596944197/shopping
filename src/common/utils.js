export function debounce(fun, delay=10) {
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


