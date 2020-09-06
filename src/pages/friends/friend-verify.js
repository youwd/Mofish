import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    Text, StyleSheet, View,
    TextInput, Switch,
    TouchableOpacity
} from 'react-native';
import Header from 'components/header';
import Search from 'components/search';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonSign from 'components/button-sign';

const FriendVerifyPage = ({ navigation }) => {
    const [remark, setRemark] = useState();

    // 是否仅聊天
    const [isOnlychat, setIsOnlychat] = useState(false);
    // 不让他看我
    const [isNotSeeMe, setIsNotSeeMe] = useState(false);
    // 不看他
    const [isNotSeeHim, setIsNotSeeHim] = useState(false);

    const leftClick = () => {
        navigation.pop();
    }

    const gotoClick = () => {

    }

    return (

        <View style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#EDD53E', '#FBE273']} >

                <Header
                    iconLeftName="chevron-back"
                    iconColor="#fff"
                    iconSize={25}
                    leftClick={leftClick}
                    titleText="通过朋友验证"
                />
            </LinearGradient>

            <View style={styles.verifyContainer}>

                <View style={styles.verifyItem}>
                    <Text style={styles.itemTitleStyle}>设置备注</Text>
                    <View style={styles.itemListStyle}>
                        <TextInput
                            style={styles.inputText}
                            onChangeText={text => setRemark(text)}
                            placeholder={"浪迹云游"}
                            returnKeyType={"done"}
                        />
                    </View>
                </View>

                <View style={styles.verifyItem}>
                    <Text style={styles.itemTitleStyle}>设置朋友权限</Text>
                    <View style={styles.itemListStyle}>
                        <TouchableOpacity onPress={() => setIsOnlychat(false)}>
                            <View style={styles.itemStyle}>
                                <Text style={styles.itemTextStyle}>聊天、朋友圈、运动等</Text>
                                {!isOnlychat && (<Ionicons
                                    name={"checkmark"}
                                    size={20}
                                    color={"#8ab0f9"}
                                />)}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsOnlychat(true)}>
                            <View style={[styles.itemStyle, { borderBottomWidth: 0 }]}>
                                <Text style={styles.itemTextStyle}>仅聊天</Text>
                                {isOnlychat && (<Ionicons
                                    name={"checkmark"}
                                    size={20}
                                    color={"#8ab0f9"}
                                />)}
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.verifyItem, { opacity: isOnlychat ? 0 : 100 }]}>
                    <Text style={styles.itemTitleStyle}>朋友圈和视频动态</Text>
                    <View style={styles.itemListStyle}>
                        <View style={styles.itemStyle}>
                            <Text style={styles.itemTextStyle}>不让他(她)看</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isNotSeeMe ? "#f5dd4b" : "#f4f3f4"}
                                onValueChange={() => setIsNotSeeMe(previousState => !previousState)}
                                value={isNotSeeMe}
                            />
                        </View>
                        <View style={[styles.itemStyle, { borderBottomWidth: 0 }]}>
                            <Text style={styles.itemTextStyle}>不看他(她)</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isNotSeeHim ? "#f5dd4b" : "#f4f3f4"}
                                onValueChange={() => setIsNotSeeHim(previousState => !previousState)}
                                value={isNotSeeHim}
                            />
                        </View>
                    </View>
                </View>

                <ButtonSign
                    label="完成"
                    backgroundColor="#EDD53E"
                    textColor="#000"
                    click={gotoClick}
                />

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        // height: "100%"
    },
    verifyContainer: {
        marginTop: 30,
        paddingHorizontal: 20
    },

    verifyItem: {
        marginBottom: 20
    },
    itemTitleStyle: {
        fontSize: 12,
        color: "#777",
    },

    // 设置备注输入框
    itemListStyle: {
        // padding: 10,
        backgroundColor: "#ddd",
        borderRadius: 5,
        marginTop: 5
    },
    inputText: {
        fontSize: 16,
        minWidth: "50%",
        padding: 10,
    },

    // 每个设置项里的小项
    itemStyle: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    itemTextStyle: {
        paddingVertical: 5,
    }
})
export default FriendVerifyPage
