import React, { useState, useEffect, useRef } from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconInputEmail = (
    {
        ChangeText, value,
        placeholder, iconName = "lock-closed-sharp", iconSize = 20,
        iconColor = "#3a2baf",
        borderColor = "#e6e3f6",
        placeholderTextColor,
        fontColor = "#000",
    }
) => {


    const checkoutEmail = () => {
        var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (value && !reg.test(value)) {
            Alert.alert('请输入正确的邮箱！', [
                {
                    text: '好的', onPress: () => inputEl.current.clear()

                }
            ]);
        }
    }

    return (
        <View style={[styles.inputStyle, { borderColor: borderColor }]}>
            <Ionicons name={iconName} size={iconSize} color={iconColor} />
            <TextInput
                style={[styles.inputText, { color: fontColor }]}
                onChangeText={text => ChangeText(text)}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                onBlur={checkoutEmail}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: '#e6e3f6',
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginBottom: 28
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


export default IconInputEmail
