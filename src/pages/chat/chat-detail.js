import React, { useEffect, useState } from 'react';
import {
    Text, StyleSheet, View, TextInput,
    KeyboardAvoidingView, Platform, Image,
    TouchableWithoutFeedback, Keyboard
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from 'components/header';
import Ionicons from 'react-native-vector-icons/Ionicons';

import store from 'store/index';

const ChatDetailPage = ({ navigation }) => {
    const [socket, setSocket] = useState();
    const [msg, setMsg] = useState();

    const leftClick = () => {
        navigation.pop();
    }

    useEffect(() => {
        setSocket(store.getState().socket);
        // const unsubscribe = store.subscribe(aaa1) //订阅Redux的状态
        // return () => {
        //     unsubscribe();
        // }
    }, []);

    const sendMessage = ()=>{
        socket.emit('exchange', {
            target: msg,
            payload: {
              msg: msg,
            },
          });
    }

    return (
        <View style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#90A7DA', '#A6C2F2']} >
                <Header
                    iconLeftName="chevron-back"
                    iconRightName="ellipsis-horizontal"
                    titleText="小瓶子"
                    iconColor="#fff"
                    leftClick={leftClick}
                />
            </LinearGradient>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.chatViewStyle}>

                    <View style={styles.chatItemStyle}>
                        <Image
                            style={styles.avatar}
                            source={require('assets/images/avatar/avatar1.png')}
                        />
                        <View style={[styles.chatItemTriangle, styles.chatItemTriangleLeft]}></View>
                        <LinearGradient style={styles.chatReceiveStyle} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#7AB2EB', '#C9A1F0']} >
                            {/* <View > */}
                            {/* <Text>1111111111111111111111111111111111111111111111111111111111111111111111</Text> */}
                            <Text>111111111111sssss1</Text>
                            {/* </View> */}
                        </LinearGradient>
                        <View></View>
                    </View>


                    <View style={[styles.chatItemStyle]}>
                        <View style={{ flex: 1 }}></View>

                        <View style={styles.chatSendStyle}>
                            <Text>2222222222253123123123123123125555555555555555552222</Text>
                        </View>
                        <View style={[styles.chatItemTriangle, styles.chatItemTriangleRight]}></View>
                        <Image
                            style={styles.avatar}
                            source={require('assets/images/avatar/avatar2.png')}
                        />

                    </View>

                </View>
            </TouchableWithoutFeedback>

            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.chatBottomStyle}
            >
                <View style={styles.chatInputStyle}>

                    <View style={styles.chatInputLeft}>
                        <Ionicons name={"happy-outline"} size={20} color="#999" />

                        <TextInput
                            style={[styles.inputStyle]}
                            onChangeText={text => setMsg(text)}
                            value={msg}
                            placeholder={"请输入.."}
                            keyboardType={"default"}
                            returnKeyType={"send"}
                            onSubmitEditing={sendMessage}
                            underlineColorAndroid="transparent"
                            enablesReturnKeyAutomatically={true}
                        />
                    </View>
                    <LinearGradient style={styles.inputSendStyle} start={{ x: 0, y: -1 }} end={{ x: 1, y: 1 }} colors={['#C9A1F0', '#7AB2EB']} >
                        <Ionicons name={"send"} size={14} color="#fff" />
                    </LinearGradient>
                </View>
            </KeyboardAvoidingView>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    chatViewStyle: {
        flex: 1,
        backgroundColor: "#f3f3f3",
        paddingHorizontal: 10,
    },
    chatBottomStyle: {
        flexDirection: "row",
        justifyContent: "center"
    },
    chatInputStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 40,
        width: "95%",
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowColor: "#000",
        marginBottom: 10,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    chatInputLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    inputStyle: {
        marginLeft: 10,
        minWidth: "80%"
    },
    inputSendStyle: {
        padding: 5,
        borderRadius: 15
    },

    // 中间交流内容部分
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    chatItemTriangle: {
        marginTop: 10,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: 6,
        borderTopColor: 'transparent',//下箭头颜色
        borderBottomColor: 'transparent',//上箭头颜色
    },
    chatItemTriangleLeft: {
        borderLeftColor: 'transparent',//右箭头颜色
        borderRightColor: '#7AB2EB'//左箭头颜色
    },
    chatItemTriangleRight: {

        borderLeftColor: '#fff',//右箭头颜色
        borderRightColor: 'transparent'//左箭头颜色
    },
    chatItemStyle: {
        flexDirection: "row",
        marginVertical: 10,
    },
    chatReceiveStyle: {
        borderRadius: 5,
        // borderWidth: 1,
        padding: 10,
        maxWidth: "80%"
    },
    chatSendStyle: {
        backgroundColor: "#fff",
        borderRadius: 5,
        maxWidth: "80%",
        padding: 10

    }
})


export default ChatDetailPage
