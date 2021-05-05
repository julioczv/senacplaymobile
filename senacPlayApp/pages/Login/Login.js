import React from 'react';
import { Text, TextInput, View, Image, ImageBackground, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import api from '../../services';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Login = ({ navigation }) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            senha: '',

        },
        validationSchema: Yup.object({
            email: Yup.string().email('Email inválido').required('Esse campo é obrigatorio!'),
            senha: Yup.string().required('Esse campo é obrigatorio!'),
        }),

        onSubmit: async (values) => {

            try {
                const login = {
                    email: values.email,
                    senha: values.senha
                };
                const response = await api.post('/login', login);
                if (response.data) {
                    navigation.navigate("Home");
                }
            } catch (error) {
                Alert.alert(`Algo inesperado aconteceu! ${error}`)
            } 
        }
    });

    return (

        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../../assets/background.jpg')} >

                <Image
                    source={require('../../assets/logomobile.png')}
                    style={styles.logo}
                />

                <View>
                    <TextInput
                        style={styles.input}
                        type="text"
                        placeholder="Email"
                        onChangeText={formik.handleChange('email')}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                   {/*  {formik.errors.email && formik.touched.email ? <Text style={styles.error}>{formik.errors.email}</Text> : null} */}
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Senha"
                        onChangeText={formik.handleChange('senha')}
                        onBlur={formik.handleBlur}
                        value={formik.values.senha}

                    />
{/*                     {formik.errors.senha && formik.touched.senha ? <Text style={styles.error}>{formik.errors.senha}</Text> : null} */}
                </View>

                <Button
                    title="Entrar"
                    onPress={formik.handleSubmit}
                    buttonStyle={styles.button}
                />
                <Text>Cique <Text
                onPress={()=>navigation.navigate("Register")}>aqui</Text>para se registrar</Text>

            </ImageBackground>
        </View>

    )
}

export default Login;