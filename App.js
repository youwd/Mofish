import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, Button, SafeAreaView } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabsStackScreen from 'pages/tabs';
/**股帮详情页面 */
import DetailGBScreen from 'components/detail-gb';
/**登录页面 */
import SignInPage from 'pages/user/signIn';
/**注册页面 */
import SignUpPage from 'pages/user/signUp';
/**完善个人资料 */
import ImproveImformationPage from 'pages/user/improveImformation';
import ChatDetailPage from 'pages/chat/chat-detail';
import FriendListPage from 'pages/friends/firend-list';
import FriendDetailPage from 'pages/friends/friend-detail';
import FriendAddPage from 'pages/friends/friend-add';
import { queryLastLoginInfo, updateToRealm, UserInfoTabelName } from 'utils/realm';
import FriendNewListPage from 'pages/friends/friend-new-list';
import FriendVerifyPage from 'pages/friends/friend-verify';
import Camera from 'components/camera';


/**嵌套组件 */
/**用户验证页面 */
const authScreens = {
  SignIn: SignInPage,
  SignUp: SignUpPage,
};

/**业务组件 */
const userScreens = {
  Tabs: TabsStackScreen,
};


const RootStack = createStackNavigator();
export default function App() {

  //判断是否已经登录过。
  const isLogin = () => {
    const userInfo = queryLastLoginInfo();
    console.log("AppuserInfo:", userInfo);
    if (userInfo) {
      updateToRealm(UserInfoTabelName, { uid: userInfo.uid, loginTime: new Date() })
      return true;
    } else {
      return false;
    }
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={isLogin() ? 'Tabs' : 'Tabs'}>
        <RootStack.Screen name="Tabs" component={TabsStackScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="Detail-gb" component={DetailGBScreen} options={{ title: '详情', headerBackTitleVisible: false }} />
        <RootStack.Screen name="Signin" component={SignInPage} options={{ headerShown: false }} />
        <RootStack.Screen name="Signup" component={SignUpPage} options={{ headerShown: false }} />
        <RootStack.Screen name="improveImformation" component={ImproveImformationPage} options={{ headerShown: false }} />
        <RootStack.Screen name="chatDetail" component={ChatDetailPage} options={{ headerShown: false }} />

        <RootStack.Screen name="friendDetail" component={FriendDetailPage} options={{ headerShown: false }} />
        <RootStack.Screen name="friendList" component={FriendListPage} options={{ headerShown: false }} />
        <RootStack.Screen name="friendAdd" component={FriendAddPage} options={{ headerShown: false }} />
        <RootStack.Screen name="friendNewList" component={FriendNewListPage} options={{ headerShown: false }} />
        <RootStack.Screen name="friendVerify" component={FriendVerifyPage} options={{ headerShown: false }} />
        
        <RootStack.Screen name="camera" component={Camera} options={{ headerShown: false }} />
        
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