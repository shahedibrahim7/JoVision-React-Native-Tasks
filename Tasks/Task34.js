import React from 'react'
import { View, Text } from 'react-native'
import useCurrentTime from '../hooks/useCurrentTime'

const Task34 = () => {
    const time = useCurrentTime()

    return (
        <View>
            <Text>Time: {time.toLocaleTimeString()}</Text>
            <Text>Date: {time.toDateString()}</Text>
        </View>
    )
}

export default Task34
