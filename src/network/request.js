import axios from 'axios'


// 方法1,推荐做法
// export function request(config) {
//   // 创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 3000
//   })

//   // axios的拦截器
//   // ||请求拦截
//   instance.interceptors.request.use(config=>{
//     // 打印了上面信息的时候就表示已经拦截成功
//     // 1.拦截的作用的以防config的信息不符合服务器的要求
//     // 2.又或者是每次发送网络请求的时候，都希望在界面上显示一个请求的图标或其他信息
//     // 3.某些网络请求，比如登陆，必须携带一些特殊的信息
//     return config
//   },err=>{
//     return err
//   })

//   // ||响应拦截
//   instance.interceptors.response.use(resp=>{
//     // 拦截处理完要进行数据返回
//     return resp.data
//   },err=>{
//     return err
//   })
//   // 发送网络请求,返回值是一个promise
//   return instance(config)
// }

// 方法二
export function request(config) {
  return new Promise((resolve, reject) => {
    // // 创建axios实例
    const instance = axios.create({
      // baseURL: 'http://123.207.32.32:8000',
      // baseURL:'http://adi-v3.dev',
      baseURL: 'http://152.136.185.210:8000/api/w6',
      timeout: 5000
    })


    // 过滤器(拦截器)
    instance.interceptors.response.use(res => {
      return res.data
    })

    // 网络请求
    instance(config)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}