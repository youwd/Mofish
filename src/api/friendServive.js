// 好友相关的服务

import serviceYouni from './index';

import { ACTIONS, storeDispatch } from 'store/actions';

import store from 'store/index';


/**查看本用户的好友申请 */
export function getFriendRequest(id) {
    const params = {
        id: id
    }
    serviceYouni("getFriendRequest", params)
        .then((res) => {
            let newCount = 0;
            res.map(item => {
                //筛选出未读的数量
                if (!item.receiveRead) {
                    newCount++;
                }
            });
            const value = { newCount, list: res }
            storeDispatch(ACTIONS.FRIEND_REQUEST, value);
        }).catch(error => {
            console.error(error);
        });
}

/**用户的好友申请--已读 */
export function friendRequestIsRead(id) {
    const params = {
        id: id
    }
    console.log(params)
    serviceYouni("friendRequestIsRead", params)
        .then((res) => {
            console.log(res);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
            // 看过数据后，清空newCount
            const _friendRequest = store.getState().friendRequest;
            _friendRequest.newCount = 0;
            storeDispatch(ACTIONS.FRIEND_REQUEST, _friendRequest);
            console.log("看过数据后，清空newCount",store.getState().friendRequest.newCount);
        });
}