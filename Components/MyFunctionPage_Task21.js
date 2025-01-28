import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const MyFunctionPage_Task21 = () => {

    useEffect(() => {
        console.log('loaded')

        return () => {
            console.log('unloaded')
        }
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is my function page for Task 21</Text>
        </View>
    )
}

export default MyFunctionPage_Task21