import React, {useState} from 'react'
import {View, Text, Button, Image} from 'react-native'

const cat = require('../Resources/cat.jpg')
const dog = require('../Resources/dog.jpg')
const bird = require('../Resources/bird.jpg')

const Task27 = () => {
    const [img, setImg] = useState(null)

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10}}>
            <Text style={{fontSize: 20, marginBottom: 20}}>Select image to display: </Text>
            <Image source={img} style={{width: 200, height: 200, marginBottom: 20}} />
            <Button title="1. Cat" onPress={() => setImg(cat)}></Button>
            <Button title="2. Dog" onPress={() => setImg(dog)}></Button>
            <Button title="3. Bird" onPress={() => setImg(bird)}></Button>
        </View>
    )
}

export default Task27