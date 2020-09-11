import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    Text, StyleSheet, View,
    TouchableOpacity, FlatList,
    Image, ScrollView
} from 'react-native';
import Header from 'components/header';
import Search from 'components/search';
import Ionicons from 'react-native-vector-icons/Ionicons';

// 获取手机通讯录
import Contacts from 'react-native-contacts';

import store from 'store/index';
import { ACTIONS, storeDispatch } from 'store/actions';
import { friendRequestIsRead } from 'api/friendServive';
import { avatarUrl } from 'api/url';


const FriendNewListPage = ({ navigation }) => {
    const [friendRequestList, setFriendRequestList] = useState(store.getState().friendRequest.list);
    let currentValue = 0;

    useEffect(() => {
        // 进来的时候列表设为已读
        friendRequestIsRead(store.getState().userInfo.uid);

        const unsubscribe = store.subscribe(() => {
            let previousValue = currentValue;
            const _friendRequestList = store.getState().friendRequest.list;
            currentValue = _friendRequestList.length;
            // console.log("friendRequestListcurrentValue,", currentValue, previousValue);

            if (previousValue !== currentValue) {
                setFriendRequestList([..._friendRequestList]);
            }
        }) //订阅Redux的状态

        return () => {
            unsubscribe();
            // 出去的时候列表设为已读，防止新的数据进来没清掉
            friendRequestIsRead(store.getState().userInfo.uid);
        }
    }, []);


    const leftClick = () => {
        navigation.pop();
    }
    const rightClick = () => {
        navigation.navigate('friendAdd');
    }

    /**获取手机联系人 */
    const getContacts = () => {
        Contacts.getAll((err, contacts) => {
            if (err) {
                throw err;
            }
            // contacts returned
            console.log("contacts:", JSON.stringify(contacts));
        })
    }

    const goFriendDetail = () => {
        navigation.navigate('friendDetail', "account");
    }


    /**
     * 渲染好友请求列表
     */
    const renderFriendRequestList = ({ item }) => {
        console.log("231312", item);
        return (
            <View style={styles.itemContainerStyle}>
                <TouchableOpacity onPress={goFriendDetail}>
                    <View style={styles.itemStyle}>
                        <Image
                            style={styles.avatar}
                            source={
                                {
                                    uri: `${avatarUrl}/${item.requestAvatar}`,
                                    cache: 'force-cache'
                                }
                            }
                        />
                        <View style={styles.itemLeft}>
                            <Text style={styles.itemTitle}>小瓶子</Text>
                            <Text style={styles.itemText}>消息内容....</Text>
                        </View>
                        <View style={styles.itemRight}>
                            <Text style={styles.itemRightLabel}>查看</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FB9B51', '#FBAE46']} >
                <Header
                    iconLeftName="chevron-back"
                    iconRightName="person-add-outline"
                    titleText="新的朋友"
                    iconColor="#fff"
                    iconSize={20}
                    leftClick={leftClick}
                    rightClick={rightClick}
                />
            </LinearGradient>



            <FlatList
                ListHeaderComponent={
                    <>
                        <View style={styles.searchStyle}>
                            <Search />
                        </View>

                        <View style={styles.addressBookStyle}>
                            <TouchableOpacity onPress={getContacts}>
                                <Ionicons name="phone-portrait-outline" style={styles.addressBookIconStyle}></Ionicons>
                                <Text style={styles.addressBookTextStyle}>添加手机联系人</Text>
                            </TouchableOpacity>
                        </View>
                    </>}

                data={friendRequestList}
                renderItem={renderFriendRequestList}
                style={styles.firendListStyle}
                keyExtractor={(item) => item.id}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#f3f3f3",
        flex: 1
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
    addressBookStyle: {
        paddingVertical: 10,
        backgroundColor: "#fff",
        marginVertical: 10
    },
    addressBookIconStyle: {
        textAlign: "center",
        fontSize: 24,
        color: "#529e50"
    },
    addressBookTextStyle: {
        textAlign: "center",
        color: "#777",
        fontSize: 12,
        marginTop: 10
    },
    firendListStyle: {
        // marginTop: 10,
    },
    itemContainerStyle: {
        padding: 10,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderColor: "#E3E3E3",
    },
    itemStyle: {
        flexDirection: "row",
        alignItems: "center"
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    itemLeft: {
        flex: 1,
        paddingHorizontal: 10
    },
    itemTitle: {
        fontWeight: "400",
        fontSize: 16,
    },
    itemText: {
        color: "#777",
        marginTop: 5
    },
    itemRight: {
        padding: 7,
        backgroundColor: "#d9d9d9",
        borderRadius: 5
    },
    itemRightLabel: {
        fontSize: 12,
        color: "#5AC178"
    }
})


export default FriendNewListPage
