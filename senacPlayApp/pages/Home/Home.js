import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, ScrollView} from 'react-native';
import styles from './styles'; 
import api from '../../services';
import RenderFilm from '../../components/RenderFilm'
import Header from '../../components/Header'

const Home = ({navigation}) => {
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
        <ScrollView style={styles.container}>
            <ScrollView>
                <Header />      
                    <FlatList contentContainerStyle={{ paddingBottom: 10 }}
                        numColumns={colunas}
                        data={films.data}
                        renderItem={
                            ({ item }) =>
                                <RenderFilm item={item} />
                        }
                        keyExtractor={item => String(item.id)}
                    />            
            </ScrollView>
        </ScrollView>
    );
};


export default Home;
