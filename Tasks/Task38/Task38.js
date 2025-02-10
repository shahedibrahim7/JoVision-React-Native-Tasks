import React, { useState } from 'react'
import { ScrollView, Text, RefreshControl, SafeAreaView } from 'react-native'

const generateRandomWord = (length) => {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

const Task37 = () => {
    const [refreshing, setRefreshing] = useState(false)

    const generateList = () => {
        const words = []
        for (let i = 0; i < 100; i++) {
            words.push(<Text key={i}> {generateRandomWord(5)} </Text>)
        }
        return words
    }

    const [words, setWords] = useState(generateList());

    const onRefresh = () => {
        setRefreshing(true)
        setTimeout(() => { setWords(generateList()); setRefreshing(false); }, 2000)
    }

    return (
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing}
                onRefresh={onRefresh}></RefreshControl>}>
                {words}
            </ScrollView>
        </SafeAreaView>
    );
}

export default Task37