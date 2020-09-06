import React, { useState } from 'react';
import {
    Text, Button, SafeAreaView, StyleSheet,
    View,
    TouchableOpacity,
    Image, FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CommonActions } from '@react-navigation/native';
import { clearLoginTime } from 'utils/realm';

import Header from 'components/header';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonSign from 'components/button-sign';

const MyScreen = ({ navigation }) => {
    const [isMale, setIsMale] = useState(1);

    const logout = async () => {
        await clearLoginTime();
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {
                        name: 'Signin',
                    },
                ],
            })
        );
    }

    const rightClick = () => {
    
    }

    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#EDD53E', '#FBE273']} >

            <View style={styles.container}>
                <Header
                    iconRightName="settings-outline"
                    iconColor="#fff"
                    iconSize={20}
                    rightClick={rightClick}
                />

                <View style={styles.detailContainer}>
                    <View style={styles.avatarItem}>
                        <Image
                            style={styles.avatar}
                            source={require('assets/images/avatar/avatar2.png')}
                        />
                    </View>

                    <View style={styles.friendDetail}>
                        <View style={styles.accountStyle}>
                            <Text style={styles.accountTextStyle}>小韭菜</Text>
                            {isMale ?
                                (<Ionicons
                                    name={"male"} size={20}
                                    color={"#4b9eea"}
                                />) :
                                (<Ionicons
                                    name={"female"} size={20}
                                    color={"#e7609e"}
                                />)}


                        </View>

                        <View style={styles.introduceStyle}>
                            <Text style={styles.introduceTextStyle}>只想做一棵不被割的小韭菜</Text>
                        </View>

                        <ButtonSign
                            label="退出"
                            backgroundColor="#EDD53E"
                            textColor="#000"
                            click={logout}
                        />
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },

    detailContainer: {
        marginTop: 30
    },
    avatarItem: {
        flexDirection: "row",
        justifyContent: "center",
        zIndex: 2,
    },
    avatar: {
        height: 120,
        width: 120,
    },
    friendDetail: {
        backgroundColor: "#fff",
        height: "100%",
        marginTop: -20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    accountStyle: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    accountTextStyle: {
        fontSize: 25,
        fontWeight: "bold"
    },
    introduceStyle: {
        marginTop: 30,
    },
    introduceTextStyle: {
        textAlign: "center",
        marginBottom: 100
    }
})

export default MyScreen