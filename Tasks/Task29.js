import React, { useRef } from 'react'
import {View, Text, Image, Alert, FlatList,Pressable, Button} from 'react-native'

const images = [
    require('../Resources/image1.jpg'),
    require('../Resources/image2.jpg'),
    require('../Resources/image3.jpg'),
    require('../Resources/image4.jpg'),
    require('../Resources/image5.jpg'),
    require('../Resources/image6.jpg'),
    require('../Resources/image7.jpg'),
    require('../Resources/image8.jpg'),
    require('../Resources/image9.jpg'),
    require('../Resources/image10.jpg')
]

const Task29 = () => {
    const imgsRef = useRef(null)

    const op = (index) => {Alert.alert('You have selected image: ' + (index + 1))}

    const op2 = () => {
        Alert.prompt('Scroll to Image', 'Enter image index (1-' + images.length + ')', (text) => {
            const i = parseInt(text) - 1
            if (isNaN(i) || i < 0 || i >= images.length) { Alert.alert('Invalid index') }
            else { imgsRef.current.scrollToIndex({ index: i, animated: true }) }
        })
    }
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FlatList
                data={images}
                ref={imgsRef }
                horizontal
                renderItem={({item, index}) => (
                    <Pressable onPress={() => op(index)}>
                        <Image source={item} style={{width: 100, height: 100, margin: 10}}></Image>
                    </Pressable>
                ) }
                keyExtractor={(item, index) => index.toString()}
            ></FlatList>

            <Button title="Scroll to Image" onPress={op2}></Button>
        </View>
    )
}

export default Task29