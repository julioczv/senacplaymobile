import React from 'react';
import { Text, TextInput, View, Image, ImageBackground, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import api from '../../services';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';

const Register = ({ navigation }) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            user: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Esse campo é obrigatorio!'),
            email: Yup.string().email('Email inválido!').required('Esse campo é obrigatorio!'),
            user: Yup.string().required('Esse campo é obrigatorio!'),
            password: Yup.string().required('Senha requirida!'),
        }),

        onSubmit: async (values) => {
            const user = {
                email: values.email,
                senha: values.password,
                nomeCompleto: values.name,
                usuario: values.user,
            };
            Alert.alert('Teste')
            /* const response = await api.post('users', user); */
            /* if (response.data) {
               navigation.navigate("Login");
            } */
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