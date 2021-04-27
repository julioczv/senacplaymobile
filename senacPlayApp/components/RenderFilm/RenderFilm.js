import React from 'react';
<<<<<<< HEAD
import { View, Image } from 'react-native';
import styles from './styles'
=======
import { View, Image, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
>>>>>>> 82886bb4298641e3bd50c28ab68fe13393ee453b

const RenderFilm = ({ item }) => {
    const navigation = useNavigation();
    return (
<<<<<<< HEAD
        <View>
            <View style={styles.container}>
                <Image source={{ uri: item.imagem }} style={styles.img} />
            </View>
        </View>
    )
};

=======
        <TouchableOpacity
        onPress={ () => navigation.navigate("Watch")}>
            <View style={styles.container}>

                <Image source={{ uri: item.imagem }} style={styles.image} />
            </View>
        </TouchableOpacity>
    )
};


>>>>>>> 82886bb4298641e3bd50c28ab68fe13393ee453b
export default RenderFilm;