import React from 'react';
import { Text } from 'react-native'
const MyScreen = ({route}) => {
    console.log(route.params);
    return (
        <Text>MyScreen</Text>
    )
}

export default MyScreen