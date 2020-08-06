import axios from 'axios';
import serviceURL from './url';

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
            if (res.data.code === 200) {
                resolve(res.data.data);
            } else {
                reject(res.data.des);
            }
        })
    });

}

export default serviceYouni