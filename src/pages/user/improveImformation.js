/**
 * 完善个人资料页面
 */

import React, { useState } from 'react';
import {
    Text, StyleSheet, ImageBackground, StatusBar, SafeAreaView, View,
    Button,
    TouchableWithoutFeedback
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

/**带图标的输入框 */
import IconInput from 'components/icon-input';
/**日期选择组件 */
import DateTimeModelPicker from 'components/datetime-model-picker';
import IconInputTimePicker from 'components/icon-input-timePicker';
import ButtonSign from 'components/button-sign';
import IconInputEmail from 'components/icon-input-email';
import IconInputGender from 'components/icon-input-gender';

import serviceYouni from 'api';


const placeholderTextColor = "rgba(255,255,255,0.3)";
const borderColor = "rgba(255,255,255,0.5)";
const fontColor = "#fff";


const ImproveImformationPage = ({ navigation, route }) => {

    const [nickName, setNickName] = useState();
    const [birthday, setBirthday] = useState();
    const [islunar, setIslunar] = useState(false);

    const [email, setEmail] = useState();
    const [isMale, setIsMale] = useState(1);

    console.log(route.params);

    const gotoClick = () => {
        const params = {
            uid: route.params,
            gender: isMale,
            islunar: islunar,
            birthday: birthday,
            nickName: nickName
        }
        serviceYouni("improveInformation", params)
            .then((res) => {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            {
                                name: 'Tabs',
                                params: res,
                            },
                        ],
                    })
                );
            }, (error) => {
                Alert.alert('完善信息失败，请联系管理员！', [
                    {
                        text: '好的'

                    }
                ]);
            });
        // navigation.push('Signup')
    }

    return (
        <ImageBackground source={require('assets/images/Background.png')} style={{ width: '100%', height: '100%' }}>
            <TouchableWithoutFeedback onPress={() => { navigation.pop() }}>
                <View style={styles.viewTitle}>
                    <AntDesign name={"left"} size={18} color={"#fff"} />
                    <Text style={styles.textTitle}>完善信息</Text>
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.viewContent}>
                {/* 昵称 */}
                <IconInput
                    value={nickName}
                    ChangeText={setNickName}
                    placeholder="昵称"
                    iconName="person-circle"
                    borderColor={borderColor}
                    placeholderTextColor={placeholderTextColor}
                    fontColor={fontColor}
                />

                {/* 性别 */}
                <IconInputGender
                    isMale={isMale}
                    setIsMale={setIsMale}
                />

                {/* 生日 */}
                <IconInputTimePicker
                    value={birthday}
                    ChangeText={setBirthday}
                    placeholder="生日"
                    placeholderTextColor={placeholderTextColor}
                    fontColor={fontColor}
                    borderColor={borderColor}
                    wantLunar={true}
                    islunar={islunar}
                    setIslunar={setIslunar}
                />

                {/* 邮箱 */}
                <IconInputEmail
                    value={email}
                    ChangeText={setEmail}
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
