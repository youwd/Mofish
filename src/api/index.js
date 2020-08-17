import axios from 'axios';
import serviceURL from './url';

/**
 * 
 * @param {*} type 请求类型：GET、PUT、DELETE、POST等
 * @param {*} data 请求数据
 * @param {*} headers 请求头
 * @param {*} id 若有id 这表示是id直接跟在路径后面形式
 */
const serviceYouni = (type, data = {}, headers = {}, id = 'no') => {

    const _service = serviceURL[type];
    const baseConfig = {
        method: _service.method,
        url: _service.url,
        headers,
        withCredentials: true
    }

    if (id !== 'no') {
        baseConfig.url += id
    }

    // 判断请求是否是"POST", "PATCH", "PUT",是则用data，否则用params
    const config = ["POST", "PATCH", "PUT"].includes(_service.method) ?
        { ...baseConfig, data: data } : { ...baseConfig, params: data };


    return new Promise((resolve, reject) => {
        axios(config).then((res) => {
            // console.log(config,res.data)
            if (res.data.code.toString() === '200') {
                resolve(res.data.data);
            } else {
                reject(res.data.des);
            }
        })
    });

}

export default serviceYouni