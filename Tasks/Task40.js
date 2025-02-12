import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { connect } from 'react-redux'
import ComponentOne_Task40 from '../Components/ComponentOne_Task40'
import { toggleVisibility } from '../redux/actions'

class Task40 extends Component {
    toggleVisibilityHandler = () => {this.props.toggleVisibility()}

    render() {
        return (
            <View style={{ padding: 20 }}>
                <Button
                    title={this.props.isVisible ? 'Hide Component' : 'Show Component'}
                    onPress={this.toggleVisibilityHandler}
                />
                {this.props.isVisible && <ComponentOne_Task40 />}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({isVisible: state.isVisible,})

const mapDispatchToProps = {toggleVisibility,}

export default connect(mapStateToProps, mapDispatchToProps)(Task40)
