import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
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
                horizontal
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

export default Home;