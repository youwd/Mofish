// 好友相关的服务

import serviceYouni from './index';

import store from 'store/index';
import { userInfoChange } from 'store/actionCreatores';

/**查看本用户的好友申请 */
export function getFriendRequest(id){
    const params = {
        id: id
    }
    serviceYouni("getFriendRequest", params)
        .then((res) => {
            console.log(res);
        });
}