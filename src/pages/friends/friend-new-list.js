import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    Text, StyleSheet, View,
    TouchableOpacity,
    Image, FlatList
} from 'react-native';
import Header from 'components/header';
import Search from 'components/search';
import Ionicons from 'react-native-vector-icons/Ionicons';

// 获取手机通讯录
import Contacts from 'react-native-contacts';

const FriendNewListPage = ({ navigation }) => {

    const leftClick = () => {
        navigation.pop();
    }
    const rightClick = () => {
        navigation.navigate('friendAdd');
    }

    const getContacts = () => {
        Contacts.getAll((err, contacts) => {
            if (err) {
                throw err;
            }
            // contacts returned
            console.log(JSON.stringify(contacts));
        })
    }
    
    const goFriendDetail = () => {
        navigation.navigate('friendDetail', "account");
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

            <View style={styles.searchStyle}>
                <Search />
            </View>

            <View style={styles.addressBookStyle}>
                <TouchableOpacity onPress={getContacts}>
                    <Ionicons name="phone-portrait-outline" style={styles.addressBookIconStyle}></Ionicons>
                    <Text style={styles.addressBookTextStyle}>添加手机联系人</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.itemContainerStyle}>
                <TouchableOpacity onPress={goFriendDetail}>
                    <View style={styles.itemStyle}>
                        <Image
                            style={styles.avatar}
                            source={require('assets/images/avatar/avatar1.png')}
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
        </View>
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
    addressBookStyle: {
        paddingVertical: 10,
        backgroundColor: "#fff",
        marginTop: 10
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
    itemContainerStyle: {
        marginTop: 10,
        padding: 10,
        backgroundColor: "#fff"
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
