import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../components/Header';
import { WebView } from 'react-native-webview';

const Watch = ({ route, navigation }) => {
    const item = route.params
    const goBack = () => {
        navigation.goBack();
    }

    return (
        <>
            <Header type='goBack' action={goBack} />
            <ScrollView>
                <View style={styles.container}>

                    <View>
                        <Image source={{ uri: item.imagem }} style={styles.img} />
                    </View>

                    <View>
                        <Text style={styles.textColor}>Filme: {item.nome}</Text>
                    </View>

                    <View style={styles.ano}>
                        <Text style={styles.textColor}>Ano: {item.anoDeLancamento}</Text>
                    </View>

                    <View style={styles.duracao}>
                        <Text style={styles.textColor}>Duração: {item.duracao}</Text>
                    </View>

                    <View style={styles.categoria}>
                        <Text style={styles.textColor}>Categoria: {item.categoria}</Text>
                    </View>

                    <View style={styles.class}>
                        <Text style={styles.textColor}>Classificação: {item.classificacao}</Text>
                    </View>

                    <View style={styles.sinopse}>
                        <Text style={styles.textColor}>Sinopse: {item.sinopse}</Text>
                    </View>

                    <View style={styles.film}>
                        <WebView 
                        source={{ uri: item.link }}
                        allowsFullscreenVideo={true}
                        scalesPageToFit={true}
                        />
                    </View>

                </View >
            </ScrollView>
        </>
    )
};

export default Watch;