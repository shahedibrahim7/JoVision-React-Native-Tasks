import React, { Component } from 'react'
import { Text } from 'react-native'
import { TextContext } from '../Tasks/Task38/TextContext'

export class ComponentOne extends Component {
    static contextType = TextContext

    render() {
        return <Text>output: {this.context.text}</Text>
    }
}