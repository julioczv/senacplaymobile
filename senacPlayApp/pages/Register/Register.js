import React from 'react';
import { Text, TextInput, View, Button, Image } from 'react-native';
import api from '../../services';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';

const Register = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            user: '',
            password: '',
        },
        /* validationSchema: Yup.object({
            name: Yup.string().required('Obrigatório'),
            email: Yup.string().email('Email inválido!').required('Obrigatório'),
            user: Yup.string().required('Obrigatório'),
            password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Senha Fraca").required('Obrigatório'),
        }), */

        onSubmit: async (values) => {
            const user = {
                email: values.email,
                senha: values.password,
                nomeCompleto: values.name,
                usuario: values.user,
            };
            const response = await api.post('users', user);
            if (response.data) {
                // Colocar a rota de login
                 
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
                placeholder="Insira seu nome"
                onChangeText={formik.handleChange('name')}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />

            <TextInput
                style={styles.input}
                type="text"
                placeholder="Insira seu email"
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur}
                value={formik.values.email}

            />

            <TextInput
                style={styles.input}
                type="text"
                placeholder="Insira seu nome de usuário"
                onChangeText={formik.handleChange('user')}
                onBlur={formik.handleBlur}
                value={formik.values.user}
            />

            <TextInput
                style={styles.input}
                type="password"
                placeholder="Insira sua senha"
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />

            <Button
                title="Enviar"
                style={styles.button}
                onPress={formik.handleSubmit}
                color="#7600a9"
            />

        </View>
    );
};

export default Register;