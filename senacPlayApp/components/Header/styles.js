import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logo: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#7600a9'
    },
    lupa: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    search: {
        marginLeft: 5
    },
    headerStyles: {
        justifyContent: 'space-around',
        borderBottomColor: '#7600a9',
        borderBottomWidth: 2,
        backgroundColor: '#212529'
    }
});

export default styles;