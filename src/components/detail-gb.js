import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

import serviceYouni from 'api';
import serviceURL from 'api/url'
import { FromNow } from 'utils/time'

const DetailScreen = ({ route }) => {
    const [content, getContent] = useState();
    const _params = route.params;

    useEffect(() => {
        // 看是否需要用type来判断
        if (_params.content) {
            getContent(_params.content);
        } else {
            serviceYouni("gbDetail", {}, { 'channel': 'PC' }, _params.subjectId)
                .then((res) => {
                    getContent(res.zlArticle.detail);
                }, (error) => {
                    console.log("失败");
                });
        }
    }, []);

    let contentView;
    if (_params.content) {
        contentView = <Text style={styles.contentView2}>&nbsp;&nbsp;&nbsp;{content}</Text>;
    } else {
        contentView = <WebView
            originWhitelist={['*']}
            source={{ html: content }}
        />
    }

    let summaryView;
    if (_params.summary) {
        summaryView = <View style={styles.summary}>
            <Text style={styles.summaryText}>&nbsp;&nbsp;&nbsp;{_params.summary}</Text>
        </View>
    }
    return (

        <ScrollView style={styles.view} >
            <Text style={styles.title}>{_params.title}</Text>
            {/* 作者信息 */}
            <View style={styles.author}>
                <Image
                    source={{ uri: _params.zlAvatarUrl }}
                    style={styles.avatarImage}
                />
                <View style={styles.authorInfo}>
                    <Text style={styles.authorName}>{_params.zlName}</Text>
                    <Text style={styles.time}>{FromNow(_params.updateTime)}</Text>
                </View>
            </View>

            {/* summary 信息 */}
            {summaryView}

            {/* 内容详情 */}
            {contentView}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '100%',
        backgroundColor: "#fff",
        paddingHorizontal: 10
    },
    title: {
        fontSize: 20,
        paddingVertical: 20,
    },
    author: {
        flexDirection: "row",
        alignItems: 'center',
    },
    avatarImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10
    },
    authorName: {
        fontSize: 12,
    },
    time: {
        fontSize: 10,
        color: "#999",
        fontWeight: "bold"
    },
    summary: {
        marginVertical: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderWidth: 0.5,
        borderColor: "#999",
        borderStyle: "dotted"
    },
    summaryText: {
        fontSize: 16,
        color: "#999",
        fontWeight: "bold"
    },
    contentView2: {
        paddingVertical: 20,
        fontSize: 18
    }
});

export default DetailScreen