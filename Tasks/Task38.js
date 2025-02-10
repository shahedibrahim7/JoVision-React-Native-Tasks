import React from 'react'
import { View } from 'react-native'
import { TextProvider } from './TextContext'
import ComponentTwo_Task38 from '../../Components/ComponentTwo_Task38'

const Task38 = () => {
    return (
        <TextProvider>
            <View>
                <ComponentTwo_Task38 /> 
                <ComponentTwo_Task38 />
                <ComponentTwo_Task38 />
                <ComponentTwo_Task38 />
            </View>
        </TextProvider>
    )
}

export default Task38