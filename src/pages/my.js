import React from 'react';
import { Text, Button } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { clearLoginTime } from 'utils/realm'

const MyScreen = ({ navigation }) => {

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
    return (
        // <Text>MyScreen</Text>

        <Button title="2371236123156" onPress={logout}></Button>
    )
}

export default MyScreen