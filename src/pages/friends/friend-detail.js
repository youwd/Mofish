import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    Text, StyleSheet, View,
    TouchableOpacity,
    Image, FlatList
} from 'react-native';
import Header from 'components/header';
import Search from 'components/search';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonSign from 'components/button-sign';

const FriendDetailPage = ({ navigation }) => {
    const [isMale, setIsMale] = useState(1);

    const leftClick = () => {
        navigation.pop();
    }

    const gotoClick = () => {

    }

    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#EDD53E', '#FBE273']} >

            <View style={styles.container}>
                <Header
                    iconLeftName="arrow-back"
                    iconColor="#fff"
                    iconSize={25}
                    leftClick={leftClick}
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
                            label="添加到好友列表"
                            backgroundColor="#EDD53E"
                            textColor="#000"
                            click={gotoClick}
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
    accountStyle:{
        marginTop:50,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    accountTextStyle:{
        fontSize:25,
        fontWeight:"bold"
    },
    introduceStyle:{
        marginTop:30,
    },
    introduceTextStyle:{
        textAlign:"center",
        marginBottom:100
    }
})
export default FriendDetailPage
