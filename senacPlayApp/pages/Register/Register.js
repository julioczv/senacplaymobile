import React from 'react';
import { Text, TextInput, View, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import api from '../../services';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Register = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            user: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Nome obrigatório!'),
            email: Yup.string().email('Email inválido!').required('Email obrigatório!'),
            user: Yup.string().required('Usuário obrigatório!'),
            password: Yup.string().required('Senha requirida!'),
        }),

        onSubmit: async (values) => {
            const user = {
                email: values.email,
                senha: values.password,
                nomeCompleto: values.name,
                usuario: values.user,
            };

            const response = await api.post('users', user);
            const navigation = useNavigation();
            if (response.data) {
               // Página de Login!
            }
            console.log(values)
        }
    });

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../../assets/background.jpg')}>

                <Image
                    source={require('../../assets/logomobile.png')}
                    style={styles.logo}
                />
                <View>
                    <TextInput
                        style={styles.input}
                        type="text"
                        placeholder="Insira seu nome"
                        onChangeText={formik.handleChange('name')}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.errors.name && formik.touched.name ? <Text style={styles.error}>{formik.errors.name}</Text> : null}
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        type="text"
                        placeholder="Insira seu email"
                        onChangeText={formik.handleChange('email')}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}

                    />
                    {formik.errors.email && formik.touched.email ? <Text style={styles.error}>{formik.errors.email}</Text> : null}
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        type="text"
                        placeholder="Insira seu nome de usuário"
                        onChangeText={formik.handleChange('user')}
                        onBlur={formik.handleBlur}
                        value={formik.values.user}
                    />
                    {formik.errors.user && formik.touched.user ? <Text style={styles.error}>{formik.errors.user}</Text> : null}
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Insira sua senha"
                        onChangeText={formik.handleChange('password')}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.errors.password && formik.touched.password ? <Text style={styles.error}>{formik.errors.password}</Text> : null}
                </View>

                <Button
                    title="Enviar"
                    onPress={formik.handleSubmit}
                    buttonStyle={styles.button}
                />

            </ImageBackground>
        </View>
    );
};

export default Register;