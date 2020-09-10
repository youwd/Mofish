
import store from './index';

export const ACTIONS = {
    /**全局用户信息 */
    CHANGE_USERINFO: 'changeUserInfo',
    /**好友申请列表 */
    FRIEND_REQUEST: 'friendRequest'
}

export const storeDispatch = (type, value) => {
    store.dispatch({
        type,
        value
    })
}