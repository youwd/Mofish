/**
 * 完善个人资料页面
 */

import React, { useState } from 'react';
import {
    Text, StyleSheet, ImageBackground, StatusBar, SafeAreaView, View,
    Button
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

/**带图标的输入框 */
import IconInput from '../components/icon-input';
/**日期选择组件 */
import DateTimeModelPicker from '../components/datetime-model-picker';
import IconInputTimePicker from '../components/icon-input-timePicker';
import ButtonSign from '../components/button-sign';

const placeholderTextColor = "rgba(255,255,255,0.3)";
const borderColor = "rgba(255,255,255,0.5)";
const fontColor = "#fff";


const ImproveImformationPage = ({navigation}) => {

    const [account, setAccount] = useState();
    const [birthday, setBirthday] = useState();
    const [islunar, setIslunar] = useState(false);


    const gotoClick = () => {
        navigation.push('Signup')
    }

    return (
        <ImageBackground source={require('../assets/images/Background.png')} style={{ width: '100%', height: '100%' }}>
            <View style={styles.viewTitle}>
                <AntDesign name={"left"} size={18} color={"#fff"} />
                <Text style={styles.textTitle}>完善信息</Text>
            </View>

            <View style={styles.viewContent}>
                {/* <IconInput
                    value={account}
                    ChangeText={setAccount}
                    placeholder="韭菜账号(用于登录与身份识别)"
                    iconName="phone-portrait-outline"
                    borderColor={borderColor}
                    placeholderTextColor={placeholderTextColor}
                    fontColor={fontColor}
                /> */}

                <IconInput
                    value={account}
                    ChangeText={setAccount}
                    placeholder="昵称"
                    iconName="person-circle"
                    borderColor={borderColor}
                    placeholderTextColor={placeholderTextColor}
                    fontColor={fontColor}
                />



                <IconInputTimePicker
                    value={birthday}
                    ChangeText={setBirthday}
                    placeholder="生日"
                    placeholderTextColor={placeholderTextColor}
                    fontColor={fontColor}
                    borderColor={borderColor}
                    wantLunar = {true}
                    islunar={islunar}
                    setIslunar={setIslunar}
                />

                <IconInput
                    value={account}
                    ChangeText={setAccount}
                    placeholder="邮箱(用于找回账号)"
                    iconName="mail"
                    borderColor={borderColor}
                    placeholderTextColor={placeholderTextColor}
                    fontColor={fontColor}
                />
            </View>

            <ButtonSign
                label="进入韭菜世界"
                click={gotoClick}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    viewTitle: {
        marginTop: 50,
        paddingHorizontal: 15,

        flexDirection: "row",
        alignItems: "center"
    },
    textTitle: {
        color: "#fff",
        fontSize: 16,
        paddingLeft: 15
    },
    viewContent: {
        width: "80%",
        marginLeft: "10%",
        marginTop: "20%"
    }
})


export default ImproveImformationPage
