import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class MyClassPage_Task23 extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Class page text: </Text>
                <TextInput style={{borderWidth: 1, borderColor: 'gray'}} placeholder="Type text here.." onChangeText={this.props.updateText}></TextInput>
            </View>
        )
    }
}

export default MyClassPage_Task23