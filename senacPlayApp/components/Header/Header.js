import React from 'react';
import { View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Header, Icon, } from 'react-native-elements';
import logo from '../../assets/logo.png';
import styles from './styles';

const FilmHeader = ({ action, children, type }) => {
    if (type === 'goBack') {
        return (
            <Header 
            backgroundColor="#212529"
            containerStyle={styles.headerStyles} 
            >
                <TouchableOpacity>
                    <Icon 
                        size={35}
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
        <Header 
            containerStyle={styles.headerStyles} 
            barStyle="default" 
            backgroundColor="#212529"
        >
            <Image source={logo} style={styles.logo} />

            <View style={styles.lupa}>{children}
                <Icon style={styles.search}
                    type='font-awesome'
                    color='#7600a9'
                    name='search'
                    size= {20}
                />
            </View>
                <Icon
                    type='font-awesome'
                    color='#7600a9'
                    name='user'
                    onPress={action}
                    size={35}
                />
        </Header>
    );
}

export default FilmHeader;