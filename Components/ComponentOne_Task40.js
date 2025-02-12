import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { setText } from '../redux/actions'

class ComponentOne_Task40 extends Component {
    state = {text: this.props.text,}

    componentDidUpdate(prevProps) {
        if (prevProps.text !== this.props.text) {
            this.setState({ text: this.props.text })
        }
    }

    handleTextChange = (text) => {
        this.setState({ text })
        this.props.setText(text)
    }

    render() {
        return (
            <View>
                <TextInput
                    value={this.state.text}
                    onChangeText={this.handleTextChange}
                    placeholder="Type here"
                    style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({text: state.text,})

const mapDispatchToProps = {setText,}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne_Task40)
