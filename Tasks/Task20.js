import React, { useState } from 'react';
import { View, Button } from 'react-native';
import MyClassPage_Task20 from '../Components/MyClassPage_Task20';

const Task20 = () => {
    const [showPage, setShowPage] = useState(false);
    function onButtonPress() {
        setShowPage(true)
    }

    if (showPage) {
        return <MyClassPage_Task20></MyClassPage_Task20>
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Show" onPress={onButtonPress}> </Button>
        </View>
    )
}

export default Task20