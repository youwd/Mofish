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

const FriendAddPage = ({ navigation }) => {

    const [account, setAccount] = useState();


    const leftClick = () => {
        navigation.pop();
    }

    const onSubmitEditing = () => {
        console.log(account);
        navigation.navigate('friendDetail',account);
    }
    return (
        <View style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#559EDF', '#69B9E3']} >
                <Header
                    iconLeftName="arrow-back"
                    titleText="添加朋友"
                    // iconColor="#fff"
                    iconSize={20}
                    leftClick={leftClick}
                />
            </LinearGradient>

            <View style={styles.searchStyle}>
                <Search
                    placeholder="手机号/韭菜号"
                    size={20}
                    value={account}
                    ChangeText={setAccount}
                    onSubmitEditing={onSubmitEditing}
                />
            </View>


            <View style={styles.itemContainerStyle}>
                {/* <FlatList> */}
                <TouchableOpacity style={styles.itemStyle}>
                    <View style={[styles.itemIcon, { backgroundColor: "#FB9B51" }]}>
                        <Ionicons name={"scan-outline"} size={20} color={"#fff"} />
                    </View>
                    <View style={styles.itemText}>
                        <Text style={styles.itemTitle}>扫一扫</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.itemStyle}>
                    <View style={[styles.itemIcon, { backgroundColor: "#5AC178" }]}>
                        <Ionicons name={"people-outline"} size={20} color={"#fff"} />
                    </View>
                    <View style={[styles.itemText, { borderBottomWidth: 0 }]}>
                        <Text style={styles.itemTitle}>手机联系人</Text>
                    </View>
                </TouchableOpacity>
                {/* </FlatList> */}
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
        width: 40,
        height: 40,
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
    }

})
export default FriendAddPage
