import React from 'react'
import { View, Text, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator()
function S1({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Go to S2" onPress={() => navigation.navigate('S2')} />
            <Button title="Go to S3" onPress={() => navigation.navigate('S3')} />
            <Button title="Go to S4" onPress={() => navigation.navigate('S4')} />
        </View>
    )
}
function S2({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Go to S1" onPress={() => navigation.navigate('S1')} />
            <Button title="Go to S3" onPress={() => navigation.navigate('S3')} />
            <Button title="Go to S4" onPress={() => navigation.navigate('S4')} />
        </View>
)
}
function S3({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Go to S1" onPress={() => navigation.navigate('S1')} />
            <Button title="Go to S2" onPress={() => navigation.navigate('S2')} />
            <Button title="Go to S4" onPress={() => navigation.navigate('S4')} />
        </View>)
}
function S4({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Go to S1" onPress={() => navigation.navigate('S1')} />
            <Button title="Go to S2" onPress={() => navigation.navigate('S2')} />
            <Button title="Go to S3" onPress={() => navigation.navigate('S3')} />
        </View>
    )
}

const Task42 = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="S1" component={S1}></Tab.Screen>
                <Tab.Screen name="S2" component={S2}></Tab.Screen>
                <Tab.Screen name="S3" component={S3}></Tab.Screen>
                <Tab.Screen name="S4" component={S4}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Task42
