import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from 'pages/home';
import ChatScreen from 'pages/chat/chat';
import MyScreen from 'pages/my';

// import io from 'socket.io-client';
import { queryLastLoginInfo } from 'utils/realm';
import { createSocket } from 'utils/socket';

import store from 'store/index'
import { socketChange, userInfoChange } from 'store/actionCreatores'

const log = console.log;


const TabStack = createBottomTabNavigator();
function TabsStackScreen({ navigation, route }) {

    const [uid, setUid] = useState();
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

    useEffect(() => {
        // 初始化
        const userInfo = queryLastLoginInfo();
        if (!userInfo) return;
        const _uid = userInfo.uid;
        setUid(_uid);

        // store 中更新全局用户信息
        userInfoChange(userInfo);


        const socket = createSocket(_uid,{U:111});
        socket.on('connect', () => onConnectionStateUpdate(socket));
        socket.on('disconnect', () => console.log('disconnect!!!'));
        socket.on('message', (content) => console.log('message:',content));
        socket.on('error', (e) => log('#error', e));
        
        // store 中更新全局socket信息
        // socketChange(socket);

        return () => {
            // 主动断开连接
            socket.disconnect();
            // 取消所有监听
            socket.off('connect');
            socket.off('message');
            socket.off('disconnect');
            socket.off('error');
            socket.off(socket.id);
            log("off---------");
        };
    }, []);

    return (
        <TabStack.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'newspaper'
                            : 'newspaper-outline';
                    } else if (route.name === 'Chat') {
                        iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                    } else if (route.name === 'My') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#559EDF',
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: "#fff",
                    // borderRadius:30
                }
            }}

        >
            <TabStack.Screen name="Home" component={HomeScreen} options={{ title: '资讯' }} />
            <TabStack.Screen name="Chat" component={ChatScreen} options={{ title: '消息' }} />
            <TabStack.Screen name="My" component={MyScreen} options={{ title: '我' }} />
        </TabStack.Navigator>
    );
}



export default TabsStackScreen