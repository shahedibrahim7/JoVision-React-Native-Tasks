import React, { useState } from 'react';
import { View, Button } from 'react-native';
import MyClassPage_Task20 from '../Components/MyClassPage_Task20';

const Task20 = () => {
    const [showPage, setShowPage] = useState(false);
    function onButtonPress() {
        setShowPage(!showPage)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title={showPage ? "Hide" : "Show"} onPress={onButtonPress} > </Button>
            {showPage ? <MyClassPage_Task20></MyClassPage_Task20> : null}
        </View>
    )
}

export default Task20