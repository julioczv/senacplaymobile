import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from './styles'

const RenderFilm = ({ item }) => {
    return (
        <View style={styles.container}>
            
            <Image source={{ uri: item.imagem }} style={styles.image} />
        </View>
    )
};


export default RenderFilm;