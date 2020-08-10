import React, { useEffect } from 'react';
import { Text, View, StatusBar, Button, SafeAreaView } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from './src/pages/home';
import ChatScreen from './src/pages/chat';
import MyScreen from './src/pages/my';
import DetailGBScreen from './src/components/detail-gb';
/**登录页面 */
import SignInPage from './src/pages/signIn';
/**注册页面 */
import SignUpPage from './src/pages/signUp';

/**修改tabs的标题 */
function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return '资讯';
    case 'Chat':
      return '交流';
    case 'My':
      return '我';
  }
}

const TabStack = createBottomTabNavigator();
function TabsStackScreen({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

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

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#ca2c20',
        inactiveTintColor: 'gray',
      }}
    >
      <TabStack.Screen name="Home" component={HomeScreen} options={{ title: '资讯' }} />
      <TabStack.Screen name="Chat" component={ChatScreen} options={{ title: '交流' }} />
      <TabStack.Screen name="My" component={MyScreen} options={{ title: '我' }} />
    </TabStack.Navigator>
  );
}

/**嵌套组件 */
/**用户验证页面 */
const authScreens = {
  SignIn: SignInPage,
  SignUp: SignUpPage,
};

/**业务组件 */
const userScreens = {
  Tabs: TabsStackScreen,
  Home: HomeScreen,
};


const RootStack = createStackNavigator();
export default function App() {
  let isLoggedIn = false;
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={isLoggedIn ? 'Tabs' : 'Signin'}>
        <RootStack.Screen name="Tabs" component={TabsStackScreen} />
        <RootStack.Screen name="Detail-gb" component={DetailGBScreen} options={{ title: '详情', headerBackTitleVisible: false }} />
        <RootStack.Screen name="Signin" component={SignInPage} options={{ headerShown: false }} />
        <RootStack.Screen name="Signup" component={SignUpPage} options={{ headerShown: false }} />
     
      </RootStack.Navigator>
    </NavigationContainer>


    /**后面页面多了要用下面方式 */
    // <NavigationContainer>
    //   <RootStack.Navigator>
    //     {Object.entries({
    //       // Use the screens normally
    //       // ...commonScreens,
    //       // Use some screens conditionally based on some condition
    //       ...(isLoggedIn ? userScreens : authScreens),
    //     }).map(([name, component]) => (
    //       <RootStack.Screen name={name} component={component} />
    //     ))}
    //   </RootStack.Navigator>;
    // </NavigationContainer>

  );
}