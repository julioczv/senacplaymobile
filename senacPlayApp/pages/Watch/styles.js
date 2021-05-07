import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#212529"
    },
    img: {
        width: windowWidth*0.4,
        height: windowHeight*0.35,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#7600a9',
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'center'
    },
    textColor: {
        color: '#fff',
        fontSize: 18
    },
    sinopse: {
        marginTop: 10,
        marginBottom: 15,
        marginLeft: 10,
    },
    film: {
        width: windowWidth*0.9,
        height: windowHeight*0.3,
        marginBottom: 20,
        alignSelf: 'center',
    },
    colorido: {
        color: '#7600a9',
        fontSize: 21
    },
    colorSinopse: {
        fontSize: 26,
        color: '#7600a9',
        alignSelf: 'center',
    },
    description: {
        paddingLeft: 10
    }
})

export default styles;