import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const IconQuickLogin = ({ iconName = "wechat" }) => {
    return (
        <View style={styles.IconQuickLoginStyle}>
            <AntDesign name={iconName} size={18} color="#fff" />
        </View>
    )
}

const styles = StyleSheet.create({
    IconQuickLoginStyle: {
        padding: 10,
        borderRadius: 30,
        backgroundColor: "#3628ad",
        borderWidth: 2,
        borderColor: "'rgba(0, 0, 0, 0.14)'"
    }
})


export default IconQuickLogin
