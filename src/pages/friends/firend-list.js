import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    Text, StyleSheet, View,
    TouchableOpacity,
    Image, FlatList
} from 'react-native';
import Header from 'components/header';
import Search from 'components/search';
import Ionicons from 'react-native-vector-icons/Ionicons';


import store from 'store/index';
import { ACTIONS, storeDispatch } from 'store/actions';
import { friendRequestIsRead } from 'api/friendServive';
import { avatarUrl } from 'api/url';

const FriendListPage = ({ navigation }) => {

    const [newFriendRequest, setNewFriendRequest] = useState(store.getState().friendRequest.list[0]);
    const [newCount, setNewCount] = useState(store.getState().friendRequest.newCount);

    let currentValue = newCount;
    useEffect(() => {

        const unsubscribe = store.subscribe(() => {
            let previousValue = currentValue;
            currentValue = store.getState().friendRequest.newCount;

            if (previousValue !== currentValue) {
                setNewFriendRequest(store.getState().friendRequest.list[0]);
                setNewCount(currentValue);
            }
        }) //订阅Redux的状态
        return () => {
            unsubscribe();
        }
    }, []);

    const leftClick = () => {
        navigation.pop();
    }
    const rightClick = () => {
        navigation.navigate('friendAdd');
    }

    return (
        <View style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#559EDF', '#69B9E3']} >
                <Header
                    iconLeftName="chevron-back"
                    iconRightName="person-add-outline"
                    titleText="好友列表"
                    // iconColor="#fff"
                    iconSize={20}
                    leftClick={leftClick}
                    rightClick={rightClick}
                />
            </LinearGradient>

            <View style={styles.searchStyle}>
                <Search />
            </View>


            <View style={styles.itemContainerStyle}>
                {/* <FlatList> */}
                <TouchableOpacity onPress={() => navigation.navigate('friendNewList', 111)}>
                    {
                        newCount === 0 ?
                            <View style={styles.itemStyle}>
                                <View style={[styles.itemIcon, { backgroundColor: "#FB9B51" }]}>
                                    <Ionicons name={"person-add-outline"} size={20} color={"#fff"} />
                                </View>
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTitle}>新的朋友</Text>
                                </View>
                            </View>
                            :
                            <View style={styles.itemStyle}>
                                <View style={styles.itemIcon}>
                                    <Image
                                        style={styles.avatar}
                                        source={
                                            {
                                                uri: `${avatarUrl}/${newFriendRequest.requestAvatar}`,
                                                cache: 'force-cache'
                                            }
                                        }
                                    />
                                </View>
                                <View style={styles.itemText}>
                                    <View>
                                        <Text style={styles.itemTitle}>{newFriendRequest.requestNickName}</Text>
                                        <Text style={styles.itemRemark}>{newFriendRequest.remark}</Text>
                                    </View>
                                    <View style={styles.newCount}>
                                        <Text style={styles.newCountText}>{newCount}</Text>
                                    </View>
                                </View>
                            </View>
                    }

                </TouchableOpacity>


                <TouchableOpacity style={styles.itemStyle}>
                    <View style={[styles.itemIcon, { backgroundColor: "#5AC178" }]}>
                        <Ionicons name={"people-outline"} size={20} color={"#fff"} />
                    </View>
                    <View style={[styles.itemText, { borderBottomWidth: 0 }]}>
                        <Text style={styles.itemTitle}>群聊</Text>
                    </View>
                </TouchableOpacity>
                {/* </FlatList> */}
            </View>


            <View style={styles.itemContainerStyle}>
                {/* <FlatList> */}
                <TouchableOpacity style={styles.itemStyle} onPress={() => navigation.navigate('chatDetail', 111)}>
                    <Image
                        style={styles.avatar}
                        source={require('assets/images/avatar/avatar1.png')}
                    />
                    <View style={styles.itemText}>
                        <Text style={styles.itemTitle}>小瓶子</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.itemStyle}>
                    <Image
                        style={styles.avatar}
                        source={require('assets/images/avatar/avatar1.png')}
                    />
                    <View style={[styles.itemText, { borderBottomWidth: 0 }]}>
                        <Text style={styles.itemTitle}>小瓶子</Text>

                    </View>
                </TouchableOpacity>
                {/* </FlatList> */}
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#f3f3f3"

    },
    searchStyle: {
        marginTop: 10,
        paddingHorizontal: 10,
        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    itemContainerStyle: {
        marginTop: 10,
        paddingHorizontal: 15,
        backgroundColor: "#fff"

    },
    itemStyle: {
        flexDirection: "row",
        alignItems: "center"
    },
    itemIcon: {
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 10,
    },
    itemText: {
        borderBottomWidth: 1,
        borderColor: "#E3E3E3",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        padding: 10
    },

    itemTitle: {
        fontWeight: "400",
        fontSize: 16,
    },
    itemRemark: {
        fontSize: 12,
        color: "#777"
    },
    newCount: {
        borderRadius: 10,
        color: "#fff",
        backgroundColor: "red",
        width: 20,
        height: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 3
    },
    newCountText: {
        textAlign: "center",
        fontSize: 10,
        color: "#fff"
    }

})
export default FriendListPage
