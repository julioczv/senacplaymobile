import Video from 'react-native-video'
import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';



const Watch = ({ item }) => {
    return (
        <View>
            <View style={styles.simsim}>
                <Text> {item?.sinopse}</Text>
            </View>
        </View>
    )
};



export default Watch;
