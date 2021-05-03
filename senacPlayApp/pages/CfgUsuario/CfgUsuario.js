import { View } from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../components/Header';

const CfgUsuario = ({ navigation }) => {

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View>
            <Header type='goBack' action={goBack}/>
        </View>
    )
};

export default CfgUsuario;