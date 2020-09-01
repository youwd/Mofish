import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from 'pages/home';
import ChatScreen from 'pages/chat/chat';
import MyScreen from 'pages/my';

const TabStack = createBottomTabNavigator();

function TabsStackScreen({ navigation, route }) {
    useEffect(() => {
        
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