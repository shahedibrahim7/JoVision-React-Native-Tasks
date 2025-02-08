import React from 'react'
import { ScrollView, Text } from 'react-native'

const generateRandomWord = (length) => {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

const Task36 = () => {
    const words = []
    for (let i = 0; i < 100; i++) {
        words.push(<Text key={i}> {generateRandomWord(5)} </Text>)
    }
    return (
        <ScrollView style={{ flex: 1, padding: 16 }}>
            {words}
        </ScrollView>
    )
}

export default Task36