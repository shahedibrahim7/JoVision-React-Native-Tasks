import React, {useState} from 'react'
import {View, Text} from 'react-native'
import MyClassPage_Task23 from '../Components/MyClassPage_Task23'

const Task23 = () => {
    const [textInput, setTextInput]= useState('')

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Parent page text: {textInput}</Text>
            <MyClassPage_Task23 updateText={setTextInput}></MyClassPage_Task23>
        </View>
    )
}

export default Task23