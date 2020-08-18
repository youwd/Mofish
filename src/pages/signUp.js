import React, { useState } from 'react';
import {
    SafeAreaView, Text, Button,
    StyleSheet, ImageBackground,
    StatusBar, ScrollView,
    View, TextInput,
    TouchableWithoutFeedback
} from 'react-native';

// 数据库模块
import {
    HistoryTableName,
    CityTableName,
    clearAllFromRealm,
    queryAllFromRealm,
    writeToRealm,
    clearRowFromRealm,
    realmDBPath
} from "../util/realm";

import { CommonActions } from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import IconInput from '../components/icon-input';
import ButtonSign from '../components/button-sign';
import IconQuickLogin from '../components/icon-quicklogin';
import IconInputPassword from '../components/icon-input-password';

import serviceYouni from '../api'


const SignUpPage = ({ navigation }) => {
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();
    const [eyeOff, setEyeOff] = useState(true);


    const registryClick = () => {
        const params = {
            nickName: "12312",
            phone: account,
            password: password,
            userName: account
        }
        serviceYouni("registry", params)
            .then((res) => {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            {
                                name: 'Tabs',
                                params: { user: 'jane' },
                            },
                        ],
                    })
                );
            }, (error) => {
                console.log("刷新失败");
            });

    }

    return (
        <>
            <StatusBar barStyle="light-content" translucent={true} />
            <SafeAreaView style={styles.signinViewUp}></SafeAreaView>
            <SafeAreaView>
                <ImageBackground source={require('../assets/images/user/siginBackground.png')} style={{ width: '100%', height: '100%' }}>
                    <ScrollView scrollEnabled={false}>
                        <View style={styles.inputView}>
                            {/* 标题 */}
                            <TouchableWithoutFeedback onPress={() => { navigation.pop() }}>
                                <View style={styles.signTitle}>
                                    <AntDesign name="left" size={20} color="#715ece" />
                                    <Text style={styles.signText}>注册</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={styles.input1Style}>
                                <IconInput
                                    value={account}
                                    ChangeText={setAccount}
                                    placeholder="请输入手机号"
                                    iconName="phone-portrait-outline"
                                    keyboardType="number-pad"
                                    autoFocus={true}
                                />
                                <IconInput
                                    value={account}
                                    ChangeText={setAccount}
                                    placeholder="请输入验证码"
                                    iconName="mail-open-outline"
                                    keyboardType="number-pad"
                                    isVerification={true}
                                />
                                <IconInputPassword
                                    value={password}
                                    ChangeText={setPassword}
                                    placeholder="请输入密码"
                                    eyeOff={eyeOff}
                                    setEyeOff={setEyeOff}
                                />

                                <View style={styles.checkView}>
                                    <AntDesign name="checkcircle" size={18} color="#715ece" />
                                    <Text style={{
                                        marginLeft: 5,
                                        lineHeight: 18
                                    }}>
                                        我已同意
                                        <Text style={styles.checkUrl}>《韭菜服务协议》</Text>与
                                        <Text style={styles.checkUrl}>《隐私协议》</Text>
                                    </Text>
                                </View>
                            </View>

                            <ButtonSign label="立即注册" click={registryClick}></ButtonSign>
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
        // height: 650,
    },
    signTitle: {
        marginLeft: 10,
        marginTop: "10%",
        flexDirection: "row"
    },
    signText: {
        color: "#4837BC",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },
    input1Style: {
        width: "55%",
        marginTop: "20%",
        marginLeft: 30
    },
    checkView: {
        flexDirection: "row",
        // alignItems:"center"
    },
    checkUrl: {
        color: "#3830a8"
    },
    quickLogin: {
        position: "absolute",
        bottom: 40,
        right: 30,
    },
    quickLoginTitle: {
        color: "#c0c6c9",
        paddingVertical: 30,
        textAlign: "center",
        fontSize: 12
    },
    quickLoginItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 150
    }
})

export default SignUpPage
