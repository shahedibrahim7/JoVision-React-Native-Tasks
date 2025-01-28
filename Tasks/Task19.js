import React, { useState } from 'react';
import { View, Button } from 'react-native';
import MyClassPage_Task19 from '../Components/MyClassPage_Task19';

const Task19 = () => {
    const [showPage, setShowPage] = useState(false);
    function onButtonPress() {
        setShowPage(true)
    }

    if (showPage) {
        return <MyClassPage_Task19></MyClassPage_Task19>
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Show" onPress={onButtonPress}> </Button>
        </View>
    )
}

export default Task19