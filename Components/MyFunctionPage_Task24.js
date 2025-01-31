import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TextInput } from 'react-native';

const MyFunctionPage_Task24 = forwardRef((props,ref) => {
    const [text, setText] = useState('')
    useImperativeHandle(ref, () => ({
        changeText(newText) {
            setText(newText)
        }

    }))

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
            <Text>Function page text: </Text>
            <Text>{text}</Text>
        </View>
    )
})

export default MyFunctionPage_Task24