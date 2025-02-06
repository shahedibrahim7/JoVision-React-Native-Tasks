import React, { useState, useEffect } from 'react'
import { View, TextInput, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage' //rendered on snacks.expo

const Task35 = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [country, setCountry] = useState('')

    useEffect(() => {
        const load = async () => {
            try {
                const data = await AsyncStorage.getItem('userData')
                if (data) {
                    const { name, age, country, timestamp } = JSON.parse(data)
                    const now = new Date()
                    const prev = new Date(timestamp)
                    if ((now - prev) / 1000 < 60) {
                        setName(name)
                        setAge(age)
                        setCountry(country)
                    }
                    else {
                        await AsyncStorage.removeItem('userData')
                        setName('')
                        setAge('')
                        setCountry('')
                    }
                }
            }

            catch (err) {
                console.error('Error:', err)
                alert('Failed to load.')
            }
        }

        load()
    }, [])

    const submit = async () => {
        const data = { name, age, country, timestamp: new Date().toISOString() }

        try {
            await AsyncStorage.setItem('userData', JSON.stringify(data))
            alert('Saved!')
        }
        catch (err) {
            console.error('Error:', err)
            alert('Failed to save.')
        }
    }

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                style={{ height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 10, padding: 5 }}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            ></TextInput>
            <TextInput
                style={{ height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 10, padding: 5 }}
                placeholder="Age"
                value={age}
                onChangeText={setAge}
            ></TextInput>
            <TextInput
                style={{ height: 40, borderColor: 'black', borderWidth: 1, marginBottom: 10, padding: 5 }}
                placeholder="Country"
                value={country}
                onChangeText={setCountry}
            ></TextInput>
            <Button title="Submit" onPress={submit}></Button>
        </View>
    )
}

export default Task35