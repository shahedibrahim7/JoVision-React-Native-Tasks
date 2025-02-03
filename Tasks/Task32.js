import React from 'react'
import { View } from 'react-native'
import { Video } from 'expo-av' //I used this package because I used snack.expo to run the code 


const Task32 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Video
                source={require('../Resources/minions.mp4')}
                style={{ width: '100%', height: 400 }}
                usePoster={true}
                posterSource={require('../Resources/minions.jpg')}
                posterStyle={{ width: '100%', height: 400, resizeMode: 'cover' }}
                resizeMode="cover"
                shouldPlay={true}>
            </Video>
        </View>
    )
}

export default Task32