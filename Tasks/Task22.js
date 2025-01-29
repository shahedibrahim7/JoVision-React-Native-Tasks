import React, {useState} from 'react'
import {View, Text} from 'react-native'
import MyFunctionPage_Task22 from '../Components/MyFunctionPage_Task22'

const Task22 = () => {
    const [textInput, setTextInput]= useState('')

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Parent page text: {textInput}</Text>
            <MyFunctionPage_Task22 updateText={setTextInput}></MyFunctionPage_Task22>
        </View>
    )
}

export default Task22