import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, StyleSheet, TextInput } from 'react-native';
/* import styles from './styles'; */
import api from '../../services';
import RenderFilm from '../../components/RenderFilm'
import Header from '../../components/Header'

const Home = () => {
    const colunas = 4

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
            <View>
                <Header />
                <FlatList
                    numColumns={colunas}
                    data={films.data}
                    renderItem={
                        ({ item }) =>
                            <RenderFilm item={item} />
                    }
                    keyExtractor={item => String(item.id)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'

    },
});

export default Home;
