import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        marginBottom: 8,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderColor: '#7600a9',
        borderWidth: 1,
        borderRadius: 3,
    },
    logo: {
        width: 150,
        height: 150
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
      },
    error: {
        color: '#f54242',
    },
    button: {
        backgroundColor: '#7600a9',
        width: 100
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