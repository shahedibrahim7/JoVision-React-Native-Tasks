import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class MyClassPage_Task25 extends Component {
    state = {text: ''}
    changeText= (newText)=> {
        this.setState({text:newText})
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Class page text: </Text>
                <Text>{this.state.text} </Text>
            </View>
        )
    }
}

export default MyClassPage_Task25