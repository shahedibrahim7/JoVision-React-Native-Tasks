import React, {useState} from 'react'
import {View, Text, Button} from 'react-native'

const Task26 = () => {
    const [ip, setIp] = useState('')

    function fetchIP() {
        return fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => data.ip)
            .catch(error => {
                console.error('ERROR FETCHING IP: ', error.message)
                return ''
            })
    }

    function fetchIPNonBlocking() {
        fetchIP().then(setIp)
    }

    async function fetchIPBlocking() {
        setIp(await fetchIP())
    }

    return (
        <View style={{padding: 50, alignItems: 'center',gap: 10}}>
            <Text style={{fontSize: 20, marginBottom: 20}}>Your IP: {ip}</Text>
            <Button title="Get IP (Non Blocking)" onPress={fetchIPNonBlocking}></Button>
            <Button title="Get IP (Blocking)" onPress={fetchIPBlocking}></Button>
        </View>
    )
}

export default Task26