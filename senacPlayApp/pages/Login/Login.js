import React from 'react';
import { Text, TextInput, View, Image, ImageBackground, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import api from '../../services';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {

    const formik = useFormik({
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
    });

    return (

        <View style={styles.container}>
           
           <Image style={{width: 200, height: 200}} source={require('../../assets/logo.png')} ></Image>


                <View>
                    <TextInput
                        style={styles.input}
                        type="text"
                        placeholder="Email"
                        onChangeText={formik.handleChange('email')}
                        onEndEditing={formik.handleBlur}
                        value={formik.values.email}
                    />
                </View>
{/*  {formik.errors.email && formik.touched.email ? <Text style={styles.error}>{formik.errors.email}</Text> : null} */}
                <View>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Senha"
                        onChangeText={formik.handleChange('senha')}
                        onEndEditing={formik.handleBlur}
                        value={formik.values.senha}
                    />
                </View>
{/*{formik.errors.senha && formik.touched.senha ? <Text style={styles.error}>{formik.errors.senha}</Text> : null} */}
                <Button
                    title="Entrar"
                    onPress={formik.handleSubmit}
                    buttonStyle={styles.button}
                />
                <View>
                  <Text style={styles.click}>Cique <Text style={styles.here}
                onPress={()=>navigation.navigate("Register")}>aqui </Text>para se registrar</Text>
                </View>

           
        </View>
    )
}

export default Login;