import React, { useState, useEffect, useRef } from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconInputPassword = (
    {
        ChangeText, value,
        placeholder, iconName = "lock-closed-sharp", iconSize = 20,
        iconColor = "#3a2baf",
        eyeOff,
        setEyeOff,
    }
) => {

    const inputEl = useRef(null);

    /**密码框图标按钮 */
    const [eyeIcon, setEyeIcon] = useState(<Ionicons name={"ios-eye-off"} size={iconSize} color={iconColor} />);

    const eyeIconClick = () => {
        const _eyeOff = !eyeOff;
        setEyeOff(_eyeOff);
        if (_eyeOff) {
            setEyeIcon(<Ionicons name={"ios-eye-off"} size={iconSize} color={iconColor} />);
        }
        else {
            setEyeIcon(<Ionicons name={"ios-eye"} size={iconSize} color={iconColor} />);
        }
    }

    const checkoutPwd = () => {
        if (value && value.length < 6) {
            Alert.alert('密码不少于6位', [
                {
                    text: '好的', onPress: () => inputEl.current.clear()

                }
            ]);
        }
    }

    return (
        <View style={styles.inputStyle}>
            <Ionicons name={iconName} size={iconSize} color={iconColor} />
            <TextInput
                style={styles.inputText}
                ref={inputEl}
                onChangeText={text => ChangeText(text)}
                value={value}
                placeholder={placeholder}
                secureTextEntry={eyeOff}
                keyboardType={"default"}
                returnKeyType={"done"}
                onBlur={checkoutPwd}
            />
            <View style={styles.passwordStyle}>
                <TouchableOpacity activeOpacity={0.5} onPress={eyeIconClick}>
                    {eyeIcon}
                </TouchableOpacity>
            </View>
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
        marginLeft: 10,
        width: "70%",
    },

    passwordStyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    }
})


export default IconInputPassword
