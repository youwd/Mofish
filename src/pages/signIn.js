import React, { useState } from 'react';
import {
    SafeAreaView, Text, Button,
    StyleSheet, ImageBackground,
    StatusBar, ScrollView,
    View, TextInput,
    TouchableOpacity
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import IconInput from '../components/icon-input';
import ButtonSign from '../components/button-sign';
import IconQuickLogin from '../components/icon-quicklogin';


const SignInPage = ({ navigation }) => {
    const [account, setAccount] = useState();

    const loginClick = () => {
        // 路由到tabs主页面
        // navigation.reset({
        //     routes: [{ name: 'Tabs' }],
        // });

        console.log(111);
    }



    return (
        <>
            <StatusBar barStyle="light-content" translucent={true} />
            <SafeAreaView style={styles.signinViewUp}></SafeAreaView>
            <SafeAreaView>
                <ImageBackground source={require('../assets/images/siginBackground.png')} style={{ width: '100%', height: '100%' }}>
                    <ScrollView scrollEnabled={false}>
                        <View style={styles.inputView}>
                            {/* 标题 */}
                            <Text style={styles.signTitle}>登录</Text>

                            <View style={styles.input1Style}>
                                <IconInput
                                    value={account}
                                    ChangeText={setAccount}
                                    placeholder="请输入账号/手机号"
                                    iconName="phone-portrait-outline"
                                    keyboardType="number-pad"
                                />

                                <IconInput
                                    value={account}
                                    ChangeText={setAccount}
                                    placeholder="请输入密码"
                                    iconName="lock-closed-sharp"
                                />
                            </View>

                            <ButtonSign label="立即登录" loginClick={loginClick}></ButtonSign>

                            <View style={styles.signUpForgetPwd}>
                                <Text style={styles.signUpText} onPress={() => { navigation.push('Signup') }}>没有账号？立即注册</Text>
                                <Text style={styles.forgetPwdText}>忘记密码？</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.quickLogin}>
                        <Text style={styles.quickLoginTitle}>快捷登录</Text>
                        <View style={styles.quickLoginItem}>
                            <IconQuickLogin iconName="wechat"></IconQuickLogin>
                            <IconQuickLogin iconName="QQ"></IconQuickLogin>
                            <IconQuickLogin iconName="weibo"></IconQuickLogin>
                        </View>
                    </View>

                </ImageBackground>

            </SafeAreaView>
        </>
    )
}

const commonStyle = {
    font: {
        color: "red",
        fontSize: 18,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    signinViewUp: {
        backgroundColor: "#6554c5",
        flex: 1
    },
    inputView: {
        // borderColor: "red",
        // borderWidth: 1,
        // height: "100%"
    },
    signTitle: {
        color: "#4837BC",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 30,
        marginTop: 60,
    },
    input1Style: {
        width: 250,
        marginTop: "30%",
        marginLeft: 30
    },
    signUpForgetPwd: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    signUpText: {
        color: "#483eb0"
    },
    forgetPwdText: {
        color: "#fff"
    },
    quickLogin: {
        position: "absolute",
        bottom: 40,
        right: 30,
    },
    quickLoginTitle: {
        color: "#fbfbfb",
        paddingVertical: 30,
        textAlign: "center"

    },
    quickLoginItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 150
    }
})

export default SignInPage
