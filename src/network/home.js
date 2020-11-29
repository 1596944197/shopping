import {request} from "./request";

export function getMultiData() {
  return request({
    url: '/home/multidata'
  })
}
// 函数调用 》》压入函数栈(保存函数调用过程中所以的变量)
// 函数调用结束 》 弹出函数栈(释放函数的变量)

export function getProductData(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}