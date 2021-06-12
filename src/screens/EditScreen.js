import React from 'react';
import { View, Text } from 'react-native';

const EditScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Edit Screen = {navigation.getParam('id')}</Text>
        </View>
    )
};

export default EditScreen;