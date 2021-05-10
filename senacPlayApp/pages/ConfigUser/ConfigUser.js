import { Text, View, Image } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './styles';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfigUser = ({ navigation }) => {

    const [login, setLogin] = useState({});

    const goBack = () => {
        navigation.goBack();
    }

    const profilePicture = () => {
        const pictures = [
            "https://i.imgur.com/2ezz7tz.png",
            "https://sguru.org/wp-content/uploads/2017/06/steam-avatar-profile-picture-1003.jpg",
            "https://sguru.org/wp-content/uploads/2017/06/steam-avatar-profile-picture-1773.jpg",
            "https://i.pinimg.com/originals/6f/06/52/6f0652369f39ec5aab17fc1e29377c6a.png"
        ];
        const aleatory = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
        return pictures[aleatory];
    }

    const getLogin = useCallback( async () => {
        try {
            const login = await AsyncStorage.getItem('login')
            setLogin(JSON.parse(login))
        } catch(e) {
            console.log(e)
        }
    },[]);

    useEffect(() => {
        getLogin();
    },[getLogin])

    return (
        <View style={styles.container}>
            <Header type='exit' action={goBack}/>
            <Image source={{uri: profilePicture() }} style={styles.image}/>
            <Text style={styles.colorText}>Nome: <Text style={styles.textColor}>{login.nomeCompleto}</Text></Text> 
            <Text style={styles.colorText}>Usuário: <Text style={styles.textColor}>{login.usuario}</Text></Text> 
            <Text style={styles.colorText}>Email: <Text style={styles.textColor}>{login.email}</Text></Text>
        </View>
    )
};

export default ConfigUser;