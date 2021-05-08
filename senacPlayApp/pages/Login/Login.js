import React, { useCallback } from 'react';
import { Text, TextInput, View, Image, ImageBackground, Alert, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import api from '../../services';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from 'react-native-flash-message';

const Login = ({ navigation }) => {

    /* const formik = useFormik({
        initialValues: {
            email: '',
            senha: '',

        },
        validationSchema: Yup.object({
            email: Yup.string().email('Email inválido').required('Esse campo é obrigatório!'),
            senha: Yup.string().required('Esse campo é obrigatório!'),
        }),

        onSubmit: async (values) => {
            try {
                const login = {
                    email: values.email,
                    senha: values.senha
                };
                const response = await api.post('login', login);
                if (response.data) {
                    navigation.navigate("Home");
                    const jsonData = JSON.stringify(response.data);
                    await AsyncStorage.setItem('login', jsonData);
                }
            } catch (error) {
                Alert.alert(`Algo inesperado aconteceu! ${error}`)
                console.log(error)
            }
        }
    }); */

    const handleLogin = useCallback(async (data) => {
        try {
            const schema = Yup.object({
                email: Yup.string().email('Email inválido!').required('Credenciais incorretas'),
                senha: Yup.string().required('Credenciais incorretas'),
            });
            await schema.validate(data);
            const response = await api.post('login', data);
            navigation.navigate("Home")
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                showMessage({
                    message: error.message,
                    type: "danger"
                });
            }
            showMessage({
                message: error.message,
                type: "danger"
            });
        }
    }, []);

    return (
        <>

            <View style={styles.container}>

                <StatusBar
                    barStyle="light-content"
                    hidden={false}
                    backgroundColor="#7600a9"
                    translucent={false}
                    networkActivityIndicatorVisible={true}
                />

                <Image style={{ width: 200, height: 200 }} source={require('../../assets/logo.png')} ></Image>

                <Formik
                    enableReinitialize
                    onSubmit={handleLogin}
                    initialValues={{
                        email: "",
                        senha: "",
                    }}
                >
                    {({ handleSubmit, values, setFieldValue, handleChange }) => (
                        <>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    type="text"
                                    placeholder="Email"
                                    onChangeText={handleChange('email')}
                                    value={values.email}
                                />
                            </View>
                            {/*  {formik.errors.email && formik.touched.email ? <Text style={styles.error}>{formik.errors.email}</Text> : null} */}
                            <View>
                                <TextInput
                                    style={styles.input}
                                    secureTextEntry={true}
                                    placeholder="Senha"
                                    onChangeText={handleChange('senha')}
                                    value={values.senha}
                                />
                            </View>
                            {/*{formik.errors.senha && formik.touched.senha ? <Text style={styles.error}>{formik.errors.senha}</Text> : null} */}

                            <Button
                                title="Entrar"
                                onPress={() => handleSubmit()}
                                buttonStyle={styles.button}
                            />

                            <View>
                                <Text style={styles.click}>Cique <Text style={styles.here}
                                    onPress={() => navigation.navigate("Register")}>aqui </Text>para se registrar</Text>
                            </View>
                        </>
                    )}
                </Formik>
            </View>
        </>
    )
}

export default Login;