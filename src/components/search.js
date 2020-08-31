import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = (
    {
        ChangeText, value,
        onSubmitEditing,
        iconColor = "#bababa",
        placeholder = "搜索",
        placeholderTextColor,
        fontColor = "#000",
        keyboardType = "default",
        returnKeyType = "search",
        size = 15
    }
) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Ionicons name={"search-outline"} size={size} color={iconColor} />
            <TextInput
                style={[styles.inputStyle, { color: fontColor }]}
                onChangeText={text => ChangeText(text)}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
            />

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        // borderWidth: 0.5,
        borderRadius: 30,
        borderColor: "#999",
        backgroundColor: "#fff"

    },
    inputStyle: {
        width: "100%",
        marginLeft: 10
    }
})


export default Search
