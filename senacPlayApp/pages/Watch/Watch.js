import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header'


const Watch = ({ route, navigation }) => {
    const item = route.params
    const goBack = () => {
        navigation.goBack();
    }

    return (
        <>

            <Header type='goBack' action={goBack} />
            <View style={styles.container}>


                <View>
                    <Image source={{ uri: item.imagem }} style={styles.img} />
                </View>

                <View style={styles.ano}>
                    <Text style={styles.textColor}> Ano: {item.anoDeLancamento}</Text>
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
                    <Text style={styles.textColor}> Sinopse {item.sinopse}</Text>
                </View>
            </View >
        </>
    )
};

export default Watch;
