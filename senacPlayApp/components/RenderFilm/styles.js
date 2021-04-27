import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    image: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#7600a9',
        width: windowWidth*0.22,
        height: windowHeight*0.20,
        flex: 1
    },
     container : {
        margin: 5,
        marginLeft: 8
    } 

   
})

export default styles;