import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Search from './search';
const Header = (
    {
        iconLeftName = "",
        iconLeftCount = 0,
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
                <TouchableOpacity onPress={leftClick} style={styles.leftIcon}>
                    {iconLeftName ?
                        (<Ionicons name={iconLeftName} size={iconSize} color={iconColor} />) : null}

                    {iconLeftCount !== 0 &&
                        <View style={styles.count}>
                            {/* <Text style={styles.countText}>{iconLeftCount}</Text> */}
                        </View>
                    }
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
    leftIcon: {
        // position: "relative",
        flexDirection: "row"
    },
    count: {
        borderRadius: 3,
        color: "#fff",
        backgroundColor: "red",
        width: 6,
        height: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    },
    countText: {
        textAlign: "center",
        fontSize: 8,
        color: "#fff"
    }
})


export default Header
