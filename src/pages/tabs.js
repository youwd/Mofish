import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from 'pages/home';
import ChatScreen from 'pages/chat/chat';
import MyScreen from 'pages/my';

import io from 'socket.io-client';
const socket = io("http://127.0.0.1:7001", {

    // // 实际使用中可以在这里传递参数
    query: {
        room: 'demo',
        // userId: `client_${Math.random()}`,
        userInfo: JSON.stringify({}),
        userId: "_state.uid11111111"
    },
    transports: ['websocket']
});

const TabStack = createBottomTabNavigator();
function TabsStackScreen({ navigation, route }) {

    const onConnectionStateUpdate = (_socket) => {
        // console.log('#connect,', _socket.id, _socket);
        // 记录该id的对话
        const msgs = [];

        // 监听自身 id 以实现 p2p 通讯
        _socket.on(_socket.id, msg => {
            console.log('#receive,', msg);
            msgs.push(msg.data.payload.msg);
        });
    }

    useEffect(() => {
        socket.on('connect', () => onConnectionStateUpdate(socket));
        socket.on('disconnect', () => console.log('disconnect!!!'));
        socket.on('message', (content) => console.log(content));
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