import React, { useState } from 'react';
import { View, Image, TextInput } from 'react-native'
import { Header, Icon, } from 'react-native-elements';
import logo from '../../assets/logo.png'
import styles from './styles'

const FilmHeader = ({ action }) => {
    const [text, setText] = useState('');

    return (
        <Header backgroundColor="#212529">
            <Image source={logo} style={styles.logo} />
            <View >
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Pesquise Seu Filme"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
                <Icon
                    type='font-awesome'
                    color='#7600a9'
                    name='search'
                    onPress={action}
                />

            </View>
            <View>
                <Icon
                    type='font-awesome'
                    color='#7600a9'
                    name='bars'
                    onPress={action}
                />


            </View>
        </Header>
    );
}

export default FilmHeader;