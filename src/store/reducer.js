import { ACTIONS } from './actions'

const defaultState = {
    inputValue: 'Write Something',
    userInfo: {},
    friendRequest: {
        newCount:0,
        list:[]
    }
}  //默认数据
export default (state = defaultState, action) => {  //就是一个方法函数
    switch (action.type) {
        case ACTIONS.FRIEND_REQUEST:
            return Object.assign({}, state, {
                friendRequest: action.value
            })
        case ACTIONS.CHANGE_USERINFO:
            return Object.assign({}, state, {
                userInfo: action.value
            })
        default:
            return state
    }
}