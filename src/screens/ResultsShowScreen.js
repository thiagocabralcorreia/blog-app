import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ( { navigation }) => {
    const[result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    };
    useEffect(() => { 
        getResult(id);
    }, []);

    if(!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image
                style={styles.image}
                source={{ uri: item }}/>
            }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 15
    },
    image: {
        height: 200,
        width: 300,
        marginLeft: 15,
        marginTop: 15
    }
})

export default ResultsShowScreen;