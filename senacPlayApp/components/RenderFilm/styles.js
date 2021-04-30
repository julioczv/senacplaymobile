import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    img: {
        width: windowWidth*0.22,
        height: windowHeight*0.20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#7600a9',
        flex: 1,
    },
     container : {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 9
    }
});   

export default styles;