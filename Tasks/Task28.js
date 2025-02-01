import React from 'react'
import {View, Text, Image, Alert, FlatList,Pressable} from 'react-native'

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

const Task28 = () => {
    const op = (index) => {Alert.alert('You have selected image: ' + (index + 1))}

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FlatList
                data={images}
                horizontal
                renderItem={ ({item, index}) => (
                    <Pressable onPress={() => op(index)}>
                        <Image source={item} style={{width: 100, height: 100, margin: 10}}></Image>
                    </Pressable>
                ) }
                keyExtractor={(item, index) => index.toString()}
            ></FlatList>
        </View>
    )
}

export default Task28