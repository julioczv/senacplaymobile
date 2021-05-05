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
                    <View styles={styles.infoCard}>
                        <View>
                            <Image source={{ uri: item.imagem }} style={styles.img} />
                        </View>
                        <View>
                            <View>
                                <Text style={styles.textColor}>Filme: {item.nome}</Text>
                            </View>

<<<<<<< HEAD
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
                        </View>
=======
                    <View>
                        <Image source={{ uri: item.imagem }} style={styles.img} />
                    </View>

                    <View style={styles.flex}>

                        <View style={styles.nome}>
                            <Text style={styles.colorido}>Filme: <Text style={styles.textColor}>{item.nome}</Text></Text>
                        </View>

                        <View style={styles.ano}>
                            <Text style={styles.colorido}>Ano: <Text style={styles.textColor}>{item.anoDeLancamento}</Text></Text>
                        </View>

                        <View style={styles.duracao}>
                            <Text style={styles.colorido}>Duração: <Text style={styles.textColor}>{item.duracao}</Text></Text>
                        </View>

                        <View style={styles.categoria}>
                            <Text style={styles.colorido}>Categoria:  <Text style={styles.textColor}>{item.categoria}</Text></Text>
                        </View>

                        <View style={styles.class}>
                            <Text style={styles.colorido}>Classificação: <Text style={styles.textColor}>{item.classificacao}</Text></Text>
                        </View>

                    </View>
                    
                    <View>
                        <Text style={styles.colorSinopse}>Sinopse</Text>
>>>>>>> c72b8d759be4ea0d85dc7adb4fd002c855c0596a
                    </View>

                    <View style={styles.sinopse}>
                        <Text style={styles.textColor}>{item.sinopse}</Text>
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