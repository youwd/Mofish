import React, { useState, useEffect, useRef } from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DateTimeModelPicker from './datetime-model-picker'

const IconInputTimePicker = (
    {
        value,
        ChangeText,
        placeholder,
        placeholderTextColor,
        iconName = "calendar",
        iconSize = 20,
        iconColor = "#3a2baf",
        fontColor = "#000",
        borderColor,
        wantLunar = false,
        islunar = false,
        setIslunar
    }
) => {
    const [show, setShow] = useState(false);

    const [dateText, setDateText] = useState();

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setShow(true)}>
                <View style={[styles.inputStyle, { borderColor: borderColor }]}>
                    <Ionicons name={iconName} size={iconSize} color={iconColor} />
                    {
                        !dateText && (<Text style={[styles.inputText, { color: placeholderTextColor }]}>{placeholder}</Text>)
                    }
                    {
                        dateText && (<Text style={[styles.inputText, { color: fontColor }]}>{dateText}</Text>)
                    }
                </View>
            </TouchableWithoutFeedback>


            <DateTimeModelPicker
                setDate={ChangeText}
                setDateText={setDateText}
                mode={'date'}
                show={show}
                setShow={setShow}
                wantLunar={wantLunar}
                islunar={islunar}
                setIslunar={setIslunar}
            />
        </>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: '#e6e3f6',
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginBottom: 40
    },
    inputText: {
        fontSize: 14,
        marginLeft: 10,
        width: "70%",
    },
})


export default IconInputTimePicker
