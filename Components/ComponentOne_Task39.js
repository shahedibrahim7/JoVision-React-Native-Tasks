import React, { useState, useEffect } from 'react'
import { View, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setText } from '../redux/actions'

const ComponentOne_Task39 = () => {
    const dispatch = useDispatch()
    const savedText = useSelector((state) => state.text)
    const [text, setTextLocal] = useState(savedText)

    useEffect(() => {
        return () => {
            dispatch(setText(text))
        }
    }, [text, dispatch])

    return (
        <View>
            <TextInput
                value={text}
                onChangeText={setTextLocal}
                placeholder="Type here"
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
        </View>
    )
}

export default ComponentOne_Task39
