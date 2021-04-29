import { withFormik } from 'formik';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
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
    }

});

export default styles;