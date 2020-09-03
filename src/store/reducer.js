import { CHANGE_SOCKET, CHANGE_USERINFO } from './actionTypes'

const defaultState = {
    inputValue: 'Write Something',
    userInfo: {},
    socket: {}
}  //默认数据
export default (state = defaultState, action) => {  //就是一个方法函数
    switch (action.type) {

        case CHANGE_SOCKET:
            return Object.assign({}, state, {
                socket: action.value
            })
        case CHANGE_USERINFO:
            return Object.assign({}, state, {
                userInfo: action.value
            })
        default:
            return state
    }
}