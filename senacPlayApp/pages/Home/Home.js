import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, StyleSheet } from 'react-native';
/* import styles from './styles'; */
import api from '../../services';
import RenderFilm from '../../components/RenderFilm'

const Home = () => {

    const [films, setFilms] = useState([]);

    const loadingFilms = async () => {
        const response = await api.get('filmes')
        setFilms(response);
    }

    useEffect(() => {
        loadingFilms();
    }, [films]);

    return (
        <View style={styles.container}>
            <FlatList
                data={films.data}
                renderItem={
                    ({ item }) =>
                        <RenderFilm item={item} />
                }
                keyExtractor={item => String(item.id)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;