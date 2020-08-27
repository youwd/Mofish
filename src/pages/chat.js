import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    Text, StyleSheet, View,
    TouchableOpacity,
    Image
} from 'react-native';
import Header from 'components/header';
import Search from 'components/search';



const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#559EDF', '#69B9E3']} >
                <Header
                    iconLeftName="people-outline"
                    iconRightName="add"
                    titleText="消息"
                />
            </LinearGradient>

            <View style={styles.searchStyle}>
                <Search />
            </View>
            <View style={styles.messageContainerStyle}>
                <TouchableOpacity style={styles.messageItemStyle}>
                    <Image
                        style={styles.avatar}
                        source={require('assets/images/avatar/avatar1.png')}
                    />
                    <View style={styles.messageItemText}>
                        <Text style={styles.messageTitle}>小瓶子</Text>
                        <Text style={styles.messageContent}>消息内容....</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.messageItemStyle}>
                    <Image
                        style={styles.avatar}
                        source={require('assets/images/avatar/avatar1.png')}
                    />
                    <View style={styles.messageItemText}>
                        <Text style={styles.messageTitle}>小瓶子</Text>
                        <Text style={styles.messageContent}>消息内容....</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.messageItemStyle}>
                    <Image
                        style={styles.avatar}
                        source={require('assets/images/avatar/avatar1.png')}
                    />

                    <View style={[styles.messageItemText, { borderBottomWidth: 1 }]}>
                        <Text style={styles.messageTitle}>小瓶子</Text>
                        <Text style={styles.messageContent}>消息内容....</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    viewStyle: {
        height: "10%",
        backgroundColor: "#fff"
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
    messageContainerStyle: {
        marginTop: 10
    },
    messageItemStyle: {
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    avatar: {
        width: 40,
        height: 40
    },
    messageItemText: {
        borderTopWidth: 1,
        // borderBottomWidth: 1,
        borderColor: "#E3E3E3",
        height: 60,
        flex: 1,
        padding: 10
    },
    messageTitle: {
        fontWeight: "400",
        fontSize: 18,
    },
    messageContent: {
        fontSize: 12,
        color: "#A4A4A4",
        paddingVertical: 5
    }
})
export default ChatScreen
