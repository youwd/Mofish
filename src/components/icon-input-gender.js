import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';

const IconInputGender = (
    {
        isMale = 1,
        setIsMale,
        iconSize = 20,
    }
) => {

    return (
        <View style={styles.inputStyle}>

            <TouchableOpacity
                style={styles.inputView}
                onPress={() => {
                    setIsMale(1);
                }}
            >
                <Ionicons
                    name={"male"} size={iconSize}
                    color={isMale ? "#3c35af" : "#b5b5b5"}
                />
                <Text
                    style={[
                        styles.textStyle,
                        isMale ? { color: "#3c35af" } : { color: "#b5b5b5" }
                    ]}
                >
                    小哥哥
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.inputView}
                onPress={() => {
                    setIsMale(0);
                }}
            >
                <Ionicons
                    name={"female"} size={iconSize}
                    color={isMale ? "#b5b5b5" : "#e7609e"}
                />
                <Text
                    style={[
                        styles.textStyle,
                        isMale ? { color: "#b5b5b5" } : { color: "#e7609e" }
                    ]}
                >
                    好妹妹
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        // borderBottomWidth: 1,
        paddingBottom: 5,
        marginBottom: 28
    },
    inputView: {
        flexDirection: "row",
        alignItems: "center",

    },

    textStyle: {
        paddingHorizontal: 5,
        fontWeight: "bold"
    }
})


export default IconInputGender
