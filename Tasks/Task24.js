import React, {useState, useRef} from 'react'
import {View, Text, TextInput} from 'react-native'
import MyFunctionPage_Task24 from '../Components/MyFunctionPage_Task24'

const Task24 = () => {
    const [textInput, setTextInput] = useState('')
    const funRef = useRef();

    const updateText = (text) => {
        setTextInput(text)
        if (funRef.current) { funRef.current.changeText(text) }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Parent page text: </Text>
            <TextInput style={{ borderWidth: 1, borderColor: 'gray' }}
                value={textInput} onChangeText={updateText} placeholder="Type text here.."></TextInput>
            <MyFunctionPage_Task24 ref={funRef}></MyFunctionPage_Task24>
        </View>
    )
}

export default Task24