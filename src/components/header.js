import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Search from './search';
const Header = (
    {
        iconLeftName = "",
        iconRightName = "",
        iconColor = "#000",
        iconSize = 25,
        titleText = "",
        titleColor,
        titleFontSize = 15,
        leftClick,
        rightClick
    }
) => {
    return (
        <>
            <SafeAreaView></SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity onPress={leftClick}>
                {iconLeftName ?
                        (<Ionicons name={iconLeftName} size={iconSize} color={iconColor} />) : null}
                </TouchableOpacity>

                <Text style={{
                    fontSize: titleFontSize,
                    color: titleColor
                }}>{titleText}</Text>

                <TouchableOpacity onPress={rightClick}>
                    {iconRightName ?
                        (<Ionicons name={iconRightName} size={iconSize} color={iconColor} />) : null}
                </TouchableOpacity>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 10,
        // borderColor:"#000",
        // borderWidth:1,
        // borderRadius:10
    },
    linearGradient: {
        padding: 5,
        borderRadius: 10
    },
    viewUp: {
        // backgroundColor: "#6554c5",
        // flex: 1
    },
})


export default Header
