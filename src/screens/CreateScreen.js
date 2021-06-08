import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const[title,setTitle] = useState('');
    const[content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={styles.input}
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput
            value={content}
            onChangeText={(text) => setContent(text)}
            style={styles.input}
            />
            <Button
            title='Add Blog Post'
            onPress={() => {
                addBlogPost(title, content, () => {
                navigation.navigate('Index');
                })
            }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },

    label: {
        fontSize: 20,
        marginBottom: 5
    },
    
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10
    }
    
})

export default CreateScreen;