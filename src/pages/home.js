import React, { useState, useEffect } from 'react';
import {
    View, Text, FlatList, StyleSheet, Image,
    StatusBar, SafeAreaView,
    TouchableHighlight,
    Dimensions
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import serviceYouni from '../api'
import { FromNow } from '../util/time'



function HomeScreen({ navigation }) {

    const pageSize = 10;

    const [pageNum, setPageNum] = useState(1);

    const [resList, setResList] = useState([]);
    const [loaded, setLoaded] = useState(true);

    // 重新刷新
    const onRefreshInit = () => {
        setLoaded(true);
        setPageNum(1);
        serviceYouni("gbList", { pageNum: 1, pageSize })
            .then((res) => {
                setResList(res.records);
                setLoaded(false);
            }, (error) => {
                console.log("刷新失败");
            });
    }
    // 获取下一页数据
    const getMoreList = () => {
        const _pageNum = pageNum + 1;
        setPageNum(_pageNum);
        serviceYouni("gbList", { pageNum: _pageNum, pageSize })
            .then((res) => {
                const concatList = resList.concat(res.records);
                // console.log(_pageNum, concatList.length);
                setResList(concatList);
                setLoaded(false);
            }, (error) => {
                console.log("获取下一页失败");
            });
    }

    useEffect(() => {
        // 获取股帮信息列表
        serviceYouni("gbList", { pageNum, pageSize })
            .then((res) => {
                setResList(res.records);
                setLoaded(false);
            }, (error) => {
                console.log("失败");
            });
    }, []);

    const renderItem = ({ item }) => {
        // 判断文章是否有图片
        let contentImage;
        if (item.cover) {
            contentImage = <Image
                source={{ uri: item.cover }}
                style={styles.contentImage}
            />;
        }

        let contentText;
        if (item.summary) {
            contentText = <Text numberOfLines={6} style={styles.summary}>
                &nbsp;&nbsp;&nbsp;{item.summary}
            </Text>

        } else {
            contentText = <Text numberOfLines={6} style={styles.shortcontent}>
                &nbsp;&nbsp;&nbsp;{item.content}
            </Text>
        }

        return (
            <TouchableHighlight underlayColor="#fbecb3" onPress={() => navigation.navigate('Detail-gb', item)}>
                <View style={styles.item} >

                    {/* 卡片头部 */}
                    <View style={styles.itemTop}>
                        <View style={styles.TopLeft}>
                            <Image
                                source={{ uri: item.zlAvatarUrl }}
                                style={styles.avatarImage}
                            />
                            <Text style={styles.author}>{item.zlName}</Text>
                        </View>
                        <Text style={styles.time}>{FromNow(item.updateTime)}</Text>
                    </View>

                    {/* 卡片内容 */}
                    <View style={styles.itemBottom}>
                        <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                        <View style={styles.content}>
                            {contentText}
                            {contentImage}
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={resList}
                renderItem={renderItem}
                keyExtractor={(item,index) => item.id + index}
                refreshing={loaded}
                onRefresh={onRefreshInit}
                onEndReached={getMoreList}
                onEndReachedThreshold={0.1}
            />
        </SafeAreaView>
    );
}
const windowWidth = Dimensions.get('screen').width;
// 计算summary 的宽度  需要优化下，横屏时有问题
const summaryWidth = windowWidth - 165;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: StatusBar.currentHeight || 0,
        // backgroundColor: "#fff"
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        // marginVertical: 4,
        borderBottomWidth: 1,
        borderBottomColor: "#f6f6f6"
    },
    itemTop: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between"
    },
    TopLeft: {
        flexDirection: "row",
        alignItems: 'center',
    },
    author: {
        fontSize: 15,
        marginLeft: 10
    },
    time: {
        // fontSize: 12,
        color: "#999",
        fontWeight: "bold"

    },
    itemBottom: {
        // flex: 1

    },
    title: {
        fontSize: 20,
        paddingVertical: 10,
    },
    content: {
        flex: 1,
        flexDirection: "row",
    },
    shortcontent: {
        paddingHorizontal: 5,
        fontSize: 16,
        color: "#666"
    },
    summary: {
        width: summaryWidth,
        paddingHorizontal: 5,
        fontSize: 16,
        color: "#666"
    },
    contentImage: {
        width: 130,
        height: 100,
    },
    avatarImage: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    list: {
        // paddingTop: 10,
    }
});

export default HomeScreen