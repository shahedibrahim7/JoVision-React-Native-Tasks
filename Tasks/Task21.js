import React, { useState } from 'react';
import { View, Button } from 'react-native';
import MyFunctionPage_Task21 from '../Components/MyFunctionPage_Task21';

const Task21 = () => {
    const [showPage, setShowPage] = useState(false);
    function onButtonPress() {
        setShowPage(!showPage)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title={showPage ? "Hide" : "Show"} onPress={onButtonPress} > </Button>
            {showPage ? <MyFunctionPage_Task21></MyFunctionPage_Task21> : null}
        </View>
    )
}

export default Task21