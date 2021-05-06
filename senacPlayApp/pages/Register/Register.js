import React, { useCallback, useState } from 'react';
import { Text, TextInput, View, Image, ImageBackground, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import api from '../../services';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';

const Register = ({ navigation }) => {
    const [name, setName] = useState('');

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
            password: Yup.string().min(5,'Mínimo 5 Caracteres').required('Senha requirida!'),
        }),

        onSubmit: async () => {
            try {
                const user = {
                    email:email,
                    senha:senha,
                    nomeCompleto:nomeCompleto,
                    usuario:usuario,
                };
                const response = await api.post('users', user);
                if (response.data) {
                    Alert.alert('Conta criada!')
                    navigation.navigate("Login");
                }
            } catch (error) {
                Alert.alert('Teste')
            }
        }
    }); 

    // onSubmit: async (values) => {
    //     const user = {
    //         email: values.email,
    //         senha: values.password,
    //         nomeCompleto: values.name,
    //         usuario: values.user,
    //     };
    //     Alert.alert('Teste')
    //     /* const response = await api.post('users', user); */
    //     /* if (response.data) {
    //        navigation.navigate("Login");
    //     } */
    // }
    
                return (
        <>
                    <View style={styles.container}>
                        <ImageBackground style={styles.image} source={require('../../assets/background.jpg')}>
                            {/*    {formik.errors.name ? showMessage({
                        message: errors.name,
                        type: "danger",
                    }) : null} */}
                            <Image
                                source={require('../../assets/logomobile.png')}
                                style={styles.logo}
                            />
                            <Formik
                                onSubmit={handleSubmit}
                            >
                                {({ handleSubmit, values, setFieldValue, handleChange }) => (
                                    <>
                                        <View>
                                            <TextInput
                                                style={styles.input}
                                                type="text"
                                                placeholder="Insira seu nome"
                                                onChangeText={() => handleChange('name')}
                                                value={values.name}
                                            />
                                            {/* {formik.errors.name && formik.touched.name ? <Text style={styles.error}>{formik.errors.name}</Text> : null} */}
                                        </View>

                                        <View>
                                            <TextInput
                                                style={styles.input}
                                                type="text"
                                                placeholder="Insira seu email"
                                                onChangeText={() => handleChange('email')}
                                                value={values.email}

                                            />
                                            {/* {formik.errors.email && formik.touched.email ? <Text style={styles.error}>{formik.errors.email}</Text> : null} */}
                                        </View>

                                        <View>
                                            <TextInput
                                                style={styles.input}
                                                type="text"
                                                placeholder="Insira seu nome de usuário"
                                                onChangeText={() => handleChange('user')}
                                                value={values.user}
                                            />
                                            {/* {formik.errors.user && formik.touched.user ? <Text style={styles.error}>{formik.errors.user}</Text> : null} */}
                                        </View>

                                        <View>
                                            <TextInput
                                                style={styles.input}
                                                secureTextEntry={true}
                                                placeholder="Insira sua senha"
                                                onChangeText={() => handleChange('password')}
                                                value={values.password}
                                            />
                                            {/* {formik.errors.password && formik.touched.password ? <Text style={styles.error}>{formik.errors.password}</Text> : null} */}
                                        </View>

                                        <Button
                                            title="Enviar"
                                            onPress={handleSubmit}
                                            buttonStyle={styles.button}
                                        />
                                    </>
                                )}
                            </Formik>

                        </ImageBackground>
                    </View >
                </>
    );
};

export default Register;