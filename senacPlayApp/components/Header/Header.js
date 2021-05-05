import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Header, Icon, } from 'react-native-elements';
import logo from '../../assets/logo.png';
import styles from './styles';

const FilmHeader = ({ action, children, type }) => {
    if (type === 'goBack') {
        return (
            <Header backgroundColor="#212529">
                <TouchableOpacity>
                    <Icon style={{ size: 7 }}
                        type='font-awesome'
                        color='#7600a9'
                        name='arrow-left'
                        onPress={action}
                    />
                </TouchableOpacity>
                <Image source={logo} style={styles.logo} /> 
                <View />
            </Header>
        )
    }
    
    return (
        <Header backgroundColor="#212529">
            <Image source={logo} style={styles.logo} />
            <View style={styles.lupa}>
                {children}
                <Icon style={styles.search}
                    type='font-awesome'
                    color='#7600a9'
                    name='search'
                    size= {20}
                />
            </View>
            <View>
                <TouchableOpacity>
                    <Icon
                        type='font-awesome'
                        color='#7600a9'
                        name='bars'
                        onPress={action}
                    />
                </TouchableOpacity>
            </View>
        </Header>
    );
}

export default FilmHeader;