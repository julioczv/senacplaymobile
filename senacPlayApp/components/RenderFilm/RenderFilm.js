import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const RenderFilm = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.container}>
                <Image source={{ uri: item.imagem }} style={styles.img} />
            </View>
        </View>
    )
};

export default RenderFilm;