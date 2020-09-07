import io from 'socket.io-client';


const socketURL = 'http://127.0.0.1:7001';
const defaultRoom = 'demo';
let socket;

const onConnectionStateUpdate = (_socket) => {
    console.log('#connect,', _socket.id);
    // 记录该id的对话
    const msgs = [];

    // 监听自身 id 以实现 p2p 通讯
    _socket.on(_socket.id, msg => {
        console.log('#receive,', msg);
        // msgs.push(msg.data.payload.msg);
    });
}


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

    socket.on('connect', () => onConnectionStateUpdate(socket));
    socket.on('disconnect', () => console.log('disconnect!!!'));
    socket.on('message', (content) => console.log('message:', content));
    socket.on('error', (e) => log('#error', e));

    return socket;
}

export function destorySocket() {
    if (!socket) return;
    // 主动断开连接
    socket.disconnect();
    // 取消所有监听
    socket.off('connect');
    socket.off('message');
    socket.off('disconnect');
    socket.off('error');
    socket.off(socket.id);
}


/**
 * 根据用户id连接socket服务器
 */
export function getSocket() {
    return socket;
}