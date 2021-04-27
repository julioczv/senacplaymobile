import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles'

const RenderFilm = ({ item }) => {
    return (
        <View>
            <View style={styles.container}>
                <Image source={{ uri: item.imagem }} style={styles.img} />
            </View>
        </View>
    )
};

export default RenderFilm;