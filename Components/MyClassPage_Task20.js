import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MyClassPage_Task20 extends Component {
    componentDidMount() {
        console.log('loaded');
    }
    componentWillUnmount() {
        console.log('unloaded');
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>This is my class page for Task 20</Text>
            </View>
        )
    }
}

export default MyClassPage_Task20