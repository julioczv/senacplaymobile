import React from 'react';
import { View, Image } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import logo from '../../assets/logo.png'
import styles from './styles'

const FilmHeader = ({ action, children }) => {

    return (
        <Header backgroundColor="#212529">
            <Image source={logo} style={styles.logo} />
            <View >
            {children}
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