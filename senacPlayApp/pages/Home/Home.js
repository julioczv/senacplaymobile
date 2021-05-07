import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, TextInput, SafeAreaView } from 'react-native';
import styles from './styles';
import api from '../../services';
import RenderFilm from '../../components/RenderFilm';
import Header from '../../components/Header';

const Home = ({ navigation }) => {
    const colunas = 4

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const loadingMovies = useCallback( async () => {
        let response;
        if (search === '')
            response = await api.get(`/filmes`);
        else
            response = await api.get(`/filmes/nome/${search}`); //Chave de busca da API
        setMovies([]);
        if (response.data)
            setMovies(response.data);
    },[search]);

    const goToCfg = () => {
        navigation.navigate('ConfigUser');
      }

    useEffect(() => {
        loadingMovies();
    }, [loadingMovies]);

    return (
        <View style={styles.container}>
            <Header 
                action={goToCfg}
                >
                    <TextInput
                        style={{ height: 40, color: '#fff' }}
                        placeholder="Pesquise seu filme"
                        id="search"
                        name="search"
                        type="text"
                        onChangeText={setSearch}
                        value={search}
                        placeholderTextColor="#b7b7b7"
                    />
            </Header>
            <View>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 110 }}
                    numColumns={colunas}
                    data={movies}
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

export default Home;
