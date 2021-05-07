import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#27282D',
        flex: 1,
        alignItems: 'center',
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
    button: {
        width: 350,
        height: 40,
        backgroundColor: '#7b42f5',
        borderRadius: 20,
        justifyContent: 'center'
    },
    error: {
        color: '#f54242',
    },
    
    here: {
        color: '#7600a9',

    },
    message: {
        paddingTop:15,
    },
    click: {
        color: '#fff',
        fontSize: 17,
        alignSelf: 'center'
    }

});

export default styles;