import React, {useState} from 'react'
import {View, Text, Button, Image, Alert} from 'react-native'

const cat = require('../Resources/cat.jpg')
const dog = require('../Resources/dog.jpg')
const bird = require('../Resources/bird.jpg')

const Task27 = () => {
    const [img, setImg] = useState(null)

    const op = () => {
        Alert.alert("Select an image to display: ", "Choose 1 for cat, 2 for dog, or 3 for bird", [
            {text:"1", onPress: () => setImg(cat)},
            {text:"2", onPress: () => setImg(dog)},
            {text:"3", onPress: () => setImg(bird)},
            {text:"Cancel", style: "cancel"}
        ])
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={img} style={{width: 200, height: 200, marginBottom: 20}} />
            <Button title="Choose an image" onPress={op}></Button>
        </View>
    )
}

export default Task27