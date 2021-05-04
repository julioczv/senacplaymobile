import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#212529",
        color: '#fff',
        paddingLeft: 3,
    },
    img: {
        width: windowWidth*0.4,
        height: windowHeight*0.35,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#7600a9',
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 3
    },
    textColor: {
        color: '#fff',
        fontSize: 18
    },
    sinopse: {
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 3
        
    },
    header: {
        width: 30,
        height: 80,
    },
    film: {
        width: windowWidth*1,
        height: windowHeight*0.5,
        marginBottom: 40,
    },
    colorido: {
        color: '#7600a9',
        fontSize: 23
    },
    colorSinopse: {
        color: '#7600a9',
        fontSize: 30,
        paddingTop: 20,
        paddingLeft: 150
    }
})

export default styles;