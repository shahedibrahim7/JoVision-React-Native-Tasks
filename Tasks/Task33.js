import React, { useRef, useState } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { Video } from 'expo-av' //I used this package because I used snack.expo to run the code 

const Task33 = () => {
    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    const videoPlay = async () => {
        if (play) {
            await videoRef.current.pauseAsync()
        } else {
            await videoRef.current.playAsync()
        }
        setPlay(!play)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableWithoutFeedback onPress={videoPlay}>
                <View>
                <Video
                    ref={videoRef}
                    source={require('../Resources/minions.mp4')}
                    style={{ width: '100%', height: 400 }}
                    usePoster={true}
                    posterSource={require('../Resources/minions.jpg')}
                    posterStyle={{ width: '100%', height: 400, resizeMode: 'cover' }}
                    resizeMode="cover"
                    shouldPlay={play}
                    isLooping
                    useNativeControls={false} >
                </Video>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Task33