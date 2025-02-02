import React, { useRef, useState } from 'react'
import {View, Text, Image, Alert, FlatList,Pressable, Button} from 'react-native'

const initImages = [
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

const Task30 = () => {
    const [images, setImages] = useState(initImages)
    const imgsRef = useRef(null)

    const op = (index) => { Alert.alert('You have selected image: ' + (index + 1)) }

    const op2 = () => {
        Alert.prompt('Scroll to Image', 'Enter image index (1-' + images.length + ')', (text) => {
            const i = parseInt(text) - 1
            if (isNaN(i) || i < 0 || i >= images.length) { Alert.alert('Invalid index') }
            else { imgsRef.current.scrollToIndex({ index: i, animated: true }) }
        })
    }

    const op3 = (index) => { setImages(images.filter((_, i) => i !== index)) }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                data={images}
                ref={imgsRef}
                horizontal
                renderItem={({ item, index }) => (
                    <View style={{ position: 'relative', margin: 10 }}>

                        <Pressable onPress={() => op(index)}>
                            <Image source={item} style={{ width: 100, height: 100 }}></Image>
                        </Pressable>

                        <Pressable onPress={() => op3(index)}
                            style={{ position: 'absolute', top: 5, right: 5, backgroundColor: 'red', padding: 5 }}>
                            <Text style={{ color: 'white' }}>X</Text>
                        </Pressable>

                    </View>
                )}

                keyExtractor={(item, index) => index.toString()}>
            </FlatList>

            <Button title="Scroll to Image" onPress={op2}></Button>
        </View>
    )
}
export default Task30