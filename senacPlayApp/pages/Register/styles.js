import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        width: 350,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 10,
        marginBottom: 10,
    },

    textWelcome: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 8
    },
    text: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 20
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
    },
    error: {
        color: '#f54242'
    },
    button: {
        width: 350,
        height: 40,
        backgroundColor: '#7600a9',
        borderRadius: 20,
        justifyContent: 'center'
    },
    message: {
        paddingTop:15,
    },
    click: {
        color: '#fff',
        fontSize: 17,
        alignSelf: 'center'
    },
    here: {
        color: '#7600a9',

    },
});

export default styles;
