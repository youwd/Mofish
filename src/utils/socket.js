import io from 'socket.io-client';


const socketURL = 'http://127.0.0.1:7001';
const defaultRoom = 'demo';
let socket;


/**
 * 根据用户id连接socket服务器
 * @param {*} uid 用户id
 */
export function createSocket(uid, userInfo) {
    socket = io(socketURL, {
        // 实际使用中可以在这里传递参数
        query: {
            room: defaultRoom,
            userInfo: JSON.stringify(userInfo),
            userId: uid
        },
        transports: ['websocket']
    });

    return socket;
}


/**
 * 根据用户id连接socket服务器
 */
export function getSocket() {
    return socket;
}