import React, { useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

const MyFunctionPage_Task22 = ({updateText}) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Function page text: </Text>
            <TextInput style={{ borderWidth: 1, borderColor: 'gray' }}
                placeholder="Type text here.." onChangeText={updateText}></TextInput>
        </View>
    )
}

export default MyFunctionPage_Task22