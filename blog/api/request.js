import axios from 'axios'
//设置axios超时时间
axios.defaults.baseURL = 'http://str.lovebabyqi.cn'
axios.defaults.timeout = 5000;
//设置axios响应数据的统一格式
axios.interceptors.response.use(res=>res.data);

export default function request(url, data={}, method='get'){
  return new Promise(resolve => {
    let p = null;
    if(method==='get'){
      p = axios.get(url,{params:data});
    }else{
      p = axios.post(url,data);
    }
    p.then(res=>{
      resolve(res);
    }).catch(err=>{
      resolve(err);
    })
  })
}
