import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator()
function S1() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>#1</Text> </View>
    )
}
function S2() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>#2</Text> </View>
)
}

function S3() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>#3</Text> </View>)
}

function S4() {
    return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>#4</Text> </View>
    )
}

const Task41 = () => {
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

export default Task41
