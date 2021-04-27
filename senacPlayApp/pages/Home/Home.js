import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput } from 'react-native';
import styles from './styles';
import api from '../../services';
import RenderFilm from '../../components/RenderFilm'
import Header from '../../components/Header'

const Home = ({ navigation }) => {
    const colunas = 4

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const loadingMovies = async () => {
        let response;
        if (search === '')
            response = await api.get(`/filmes`);
        else
            response = await api.get(`/filmes/nome/${search}`); //Chave de busca da API
            console.log(response.data);
            setMovies([]);
        if (response.data)
            setMovies(response.data);
    };

    useEffect(() => {
        loadingMovies();
    }, [search]);

    return (
        <View style={styles.container}>
            <Header>
                <TextInput
                    style={{ height: 40, color: '#fff' }}
                    placeholder="Pesquise Seu Filme"
                    id="search"
                    name="search"
                    type="text"
                    onChangeText={setSearch}
                    value={search}
                    placeholderTextColor="white"
                />
            </Header>
            <FlatList
                numColumns={colunas}
                data={movies}
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
