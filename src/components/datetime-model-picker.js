
import React, { useState } from 'react';
import { Text, StyleSheet, View, Modal, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Format } from '../util/time';

/**
 * 日期时间选择组件
 * 基于@react-native-community/datetimepicker
 * 加入model样式等
 * @param {*} initdate 初始化显示时间
 * @param {*} setDate 返回选择的时间Date
 * @param {*} setDateText 用于显示时间string
 * @param {*} mode 弹出选择器的类型：date/time
 * @param {*} show 显示与隐藏
 * @param {*} setShow 设置显示与隐藏
 * @param {*} wantLunar 是否需要头部公历农历的切换
 * @param {*} islunar 选择的是否是农历
 * @param {*} setIslunar 设置公历还是农历
 * 
 */
const DateTimeModelPicker = ({
    initdate = new Date(1990, 0, 1),
    setDate,
    setDateText,
    mode,
    show = false,
    setShow,
    wantLunar = false,
    islunar = false,
    setIslunar
}) => {

    const [_date, _setDate] = useState(initdate);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || _date;
        setShow(Platform.OS === 'ios');
        // 缓存日期
        _setDate(currentDate);
    };

    // 确定按钮，将缓存日期存进确定值
    const okClick = () => {
        setDate(_date);

        const dateFormat = Format(_date, 'YYYY-MM-DD');
        const dateText = islunar ? "农历 " + dateFormat : dateFormat;
        setDateText(dateText);

        setShow(false);
    }



    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={show}
            >
                <View style={styles.modalView}>
                    <View style={styles.modelTop}>
                        <TouchableOpacity
                            onPress={() => {
                                setShow(false);
                            }}
                        >
                            <Text>取消</Text>
                        </TouchableOpacity>


                        {/* 公历或者农历 */
                            wantLunar && (<View style={styles.calendarType}>

                                <TouchableOpacity
                                    onPress={() => {
                                        setIslunar(false);
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.calendarTypeItem,
                                            { borderTopLeftRadius: 8, borderBottomLeftRadius: 8, },
                                            islunar ? { backgroundColor: "#fff" } : { backgroundColor: "#5044ba" }
                                        ]}>
                                        <Text style={islunar ? { color: "#000" } : { color: "#fff" }}>公历</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIslunar(true);
                                    }}
                                >
                                    <View
                                        style={[
                                            styles.calendarTypeItem,
                                            { borderTopRightRadius: 8, borderBottomRightRadius: 8, },
                                            islunar ? { backgroundColor: "#5044ba" } : { backgroundColor: "#fff" }
                                        ]}>
                                        <Text style={islunar ? { color: "#fff" } : { color: "#000" }}>农历</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>)
                        }

                        <TouchableOpacity
                            onPress={() => {
                                okClick(!show);
                            }}
                        >
                            <Text style={{ color: "#5044ba", fontWeight: "bold" }}>确定</Text>
                        </TouchableOpacity>
                    </View>

                    <DateTimePicker
                        testID="dateTimePicker"
                        value={_date}
                        mode={mode}
                        // is24Hour={true}
                        display="default"
                        minimumDate={new Date(1900, 0, 1)}
                        maximumDate={new Date()}
                        locale="zh"
                        onChange={onChange}
                    />
                </View>


            </Modal>
        </>
    )
}

const styles = StyleSheet.create({

    modalView: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#fbfbfb",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

        padding: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },


    modelTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10
    },

    calendarType: {
        flexDirection: "row",
        borderRadius: 8
    },
    calendarTypeItem: {
        padding: 6,
        borderWidth: 1,
        borderColor: "#666",
    }
})


export default DateTimeModelPicker
