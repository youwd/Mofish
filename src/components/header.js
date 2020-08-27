import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Search from './search';
const Header = (
    {
        iconLeftName = "",
        iconRightName = "",
        iconColor = "#000",
        iconSize = 25,
        titleText = "header",
        titleColor,
        titleFontSize = 15

    }
) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons name={iconLeftName} size={iconSize} color={iconColor} />
            </TouchableOpacity>

            <Text style={{
                fontSize: titleFontSize,
                color: titleColor
            }}>{titleText}</Text>

            <TouchableOpacity>
                <Ionicons name={iconRightName} size={iconSize} color={iconColor} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingTop: 25,
        paddingBottom: 5,
        // borderColor:"#000",
        // borderWidth:1,
        // borderRadius:10
    },
    linearGradient: {
        padding: 5,
        borderRadius: 10
    },
})


export default Header
