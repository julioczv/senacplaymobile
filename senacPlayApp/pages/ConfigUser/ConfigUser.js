import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfigUser = ({ navigation }) => {

    const [login, setLogin] = useState({});

    const goBack = () => {
        navigation.goBack();
    }

    const getLogin = async () => {
        try {
            const value = await AsyncStorage.getItem('login')
            setLogin(JSON.parse(value))
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getLogin();
    },[login])

    return (
        <View>
            <Header type='goBack' action={goBack}/>
            <Text>Name: {login.nomeCompleto}</Text>
            <Text>Username: {login.usuario}</Text>
            <Text>Email: {login.email}</Text>
        </View>
    )
};

export default ConfigUser;