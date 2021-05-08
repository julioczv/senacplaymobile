import { Text, View, _Text } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './styles';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfigUser = ({ navigation }) => {

    const [login, setLogin] = useState({});

    const goBack = () => {
        navigation.goBack();
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
            <Header type='goBack' action={goBack}/>
            <Text style={styles.colorText}>Nome: <Text style={styles.textColor}>{login.nomeCompleto}</Text></Text> 
            <Text style={styles.colorText}>Usuário: <Text style={styles.textColor}>{login.usuario}</Text></Text> 
            <Text style={styles.colorText}>Email: <Text style={styles.textColor}>{login.email}</Text></Text> 
        </View>
    )
};

export default ConfigUser;