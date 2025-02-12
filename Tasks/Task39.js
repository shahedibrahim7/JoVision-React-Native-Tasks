import React from 'react'
import { View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ComponentOne_Task39 from '../Components/ComponentOne_Task39'
import { toggleVisibility } from '../redux/actions'

const Task39 = () => {
    const dispatch = useDispatch()
    const isVisible = useSelector((state) => state.isVisible)

    const toggleVisibilityHandler = () => {
        dispatch(toggleVisibility())
    }

    return (
        <View style={{ padding: 20 }}>
            <Button
                title={isVisible ? 'Hide Component' : 'Show Component'}
                onPress={toggleVisibilityHandler}
            />
            {isVisible && <ComponentOne_Task39 />}
        </View>
    )
}

export default Task39
