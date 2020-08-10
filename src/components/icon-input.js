import React, { useState, useEffect } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconInput = (
    {
        ChangeText, value, autoFocus = false, keyboardType = "default",
        placeholder, iconName = "chatbubbles", iconSize = 20,
        iconColor = "#3a2baf",
        isVerification = false
    }
) => {
    /**是否点了获取验证码按钮 */
    const [seconds, setSeconds] = useState(0);
    const [verifText, setVerifText] = useState("获取验证码");
    const [verificationTextColor, setVerificationTextColor] = useState("#463cae");



    const verificationView = isVerification ?
        <View style={styles.verificationStyle}>
            <Text style={{ color: verificationTextColor }} onPress={() => getVerification()}>{verifText}</Text>
        </View> : null;

    /**设置按钮文本与秒数 */
    const setSecondLabel = (second, label) => {
        setSeconds(second);
        setVerifText(label);
    }


    // 倒计时方法
    const tick = (timerID, _seconds) => {
        // 已结束
        if (_seconds === 0) {
            // 恢复按钮的默认文本显示
            setSecondLabel(_seconds, "获取验证码");
            setVerificationTextColor("#463cae");
            if (timerID) {
                clearInterval(timerID);
            }
            return;
        }
        setSecondLabel(_seconds, `重新获取(${_seconds}s)`);

    };
    let timerID;
    const getVerification = () => {
        // 执行定时
        let _seconds = 10;
        if (seconds === 0) {
            setVerificationTextColor("#999");
            setSecondLabel(_seconds, `重新获取(${_seconds}s)`);
            timerID = setInterval(() => {
                tick(timerID, --_seconds);
            }, 1000);
        }
    }
    useEffect(() => {
        return () => {
            if (timerID) { clearInterval(timerID) }
        }
    }, [isVerification]);
    return (
        <View style={styles.inputStyle}>
            <Ionicons name={iconName} size={iconSize} color={iconColor} />
            <TextInput
                autoFocus={autoFocus}
                style={styles.inputText}
                onChangeText={text => ChangeText(text)}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                returnKeyType={"done"}
            />
            {verificationView}
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: '#e6e3f6',
        borderBottomWidth: 1,
        marginBottom: 40
    },
    inputText: {
        fontSize: 14,
        height: 35,
        marginLeft: 10
    },
    verificationStyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
})


export default IconInput
