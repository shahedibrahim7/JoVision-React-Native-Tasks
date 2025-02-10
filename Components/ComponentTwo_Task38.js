import React, { useContext } from 'react'
import { View, TextInput } from 'react-native'
import { TextContext } from '../Tasks/Task38/TextContext'
import ComponentOne_Task38 from './ComponentOne_Task38'

export const ComponentTwo_Task38 = () => {
    const { text, setText } = useContext(TextContext)

    return (
        <View>
            <TextInput style={{ borderWidth: 1 }} value={text}
                onChangeText={setText}
                placeholder="Type here"> </TextInput>
            <ComponentOne_Task38></ComponentOne_Task38>
        </View>
    )
}