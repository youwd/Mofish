import { CHANGE_SOCKET, CHANGE_USERINFO } from './actionTypes'
import store from './index';


export const socketChange = (value) => {
    store.dispatch({
        type: CHANGE_SOCKET,
        value
    })
}

export const userInfoChange = (value) => {
    store.dispatch({
        type: CHANGE_USERINFO,
        value
    })
}