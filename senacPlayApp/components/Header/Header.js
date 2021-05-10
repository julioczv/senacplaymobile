import React from 'react';
import { View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Header, Icon, } from 'react-native-elements';
import logo from '../../assets/logo.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const FilmHeader = ({ action, children, type, }) => {
    const navigation = useNavigation();
    if (type === 'goBack') {
        return (
            <View>
                <View>
                    <Header containerStyle={styles.headerStyles}>
                        <TouchableOpacity>
                            <Icon 
                                size={40}
                                type='font-awesome'
                                color='#7600a9'
                                name='arrow-left'
                                onPress={action}
                            />                   
                        </TouchableOpacity>
                            <Image source={logo} style={styles.logo} /> 
                            <Icon
                                size={40}
                                type='font-awesome'
                                color='#7600a9'
                                name='sign-out'
                                onPress={()=> navigation.navigate("Login")}
                            />
                    </Header>
                </View>
                    <StatusBar
                        barStyle = "light-content"
                        hidden = {false}
                        backgroundColor = "#7600a9"
                        translucent = {false}
                        networkActivityIndicatorVisible = {true}
                    />
            </View>
        )
    }
    
    return (
        <View>
            <View>
                <Header containerStyle={styles.headerStyles}>

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
                            size={40}
                        />
                </Header>
            </View>
                <StatusBar
                    barStyle = "light-content"
                    hidden = {false}
                    backgroundColor = "#7600a9"
                    translucent = {false}
                    networkActivityIndicatorVisible = {true}
                />
        </View>
    );
}

export default FilmHeader;