import React from 'react';
import { Text, TextInput, View, Button, Image } from 'react-native';
import api from '../../services';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            senha: '',

        },
        /* validationSchema: Yup.object({
            email: Yup.string().email('E-mail inválido').required('Obrigatório'),
            senha: Yup.string().required('Obrigatório'),
        }),
 */
        onSubmit: async (values) => {
            const login = {
                email: values.email,
                senha: values.senha
            };
            const response = await api.post('/login', login);
            if (response.data) {
                history.push('/filmslist')
            }
        }
    });

    return (

        <View style={styles.container}>

            <Image
                source={require('../../assets/logomobile.png')}
                style={styles.logo}
            />

            <TextInput
                style={styles.input}
                type="text"
                placeholder="Email"
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Senha"
                onChangeText={formik.handleChange('senha')}
                onBlur={formik.handleBlur}
                value={formik.values.senha}

            />

            <Button
                title="Enviar"
                style={styles.button}
                onPress={formik.handleSubmit}
                color="#7600a9"
            />

          

        </View>
    )
}

export default Login;