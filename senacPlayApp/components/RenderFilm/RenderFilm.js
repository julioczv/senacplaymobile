import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RenderFilm = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text>{item.nome}</Text>
            <Text>{item.categoria}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RenderFilm;