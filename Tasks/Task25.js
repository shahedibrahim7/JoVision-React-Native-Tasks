import React, {useState} from 'react'
import {View, Text, TextInput} from 'react-native'
import MyClassPage_Task25 from '../Components/MyClassPage_Task25'

const Task25 = () => {
    const [textInput, setTextInput] = useState('')
    const classRef = React.createRef()

    const updateText = (text) => {
        setTextInput(text)
        if (classRef.current) { classRef.current.changeText(text) }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Parent page text: </Text>
            <TextInput style={{ borderWidth: 1, borderColor: 'gray' }}
                value={textInput} onChangeText={updateText} placeholder="Type text here.."></TextInput>
            <MyClassPage_Task25 ref={classRef}></MyClassPage_Task25>
        </View>
    )
}

export default Task25