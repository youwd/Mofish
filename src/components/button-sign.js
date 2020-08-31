import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**登录注册按钮 */
const ButtonSign = ({ 
    label, click,
    textColor = "#fff",
    backgroundColor="#6352c4"
 }) => {
    return (
        <View style={styles.buttonStyle}>
            <TouchableOpacity activeOpacity={0.5} onPress={click}>
                <View style={[styles.buttonTouchable,{backgroundColor:backgroundColor}]}>
                    {/* <View style={styles.buttonStyle1}>
                        <Text style={styles.buttonText}>{label}</Text>
                    </View>
                    <View style={styles.buttonStyle2}>
                    </View>
                    <View style={styles.buttonStyle3}>
                        <Ionicons name="arrow-forward" size={24} color="#483eb1" />
                    </View> */}
                    <Text style={[styles.buttonText,{color: textColor,}]}>{label}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: "70%",
        height: 60,
        borderRadius: 35,
        marginTop: "10%",
        marginLeft: "15%",
        backgroundColor: "#3831a9",
    },
    buttonTouchable: {
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center",
        // backgroundColor: "#ebe8f8",
        borderRadius: 35,
        height: "100%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonStyle1: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "50%",
        backgroundColor: "#765bd5",
        height: "100%",
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    buttonText: {
        
        fontSize: 16
    },
    // 直角三角形
    buttonStyle2: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 60,
        borderTopWidth: 60,
        borderRightColor: 'transparent',
        borderTopColor: '#765bd5',
    },
    buttonStyle3: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    }
})


export default ButtonSign
