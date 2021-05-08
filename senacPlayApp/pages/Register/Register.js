import React, { useCallback, useState } from 'react';
import { Text, TextInput, View, Image, ImageBackground, Alert, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import api from '../../services';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';
import { showMessage } from 'react-native-flash-message';

const Register = ({ navigation }) => {
    /* const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState(''); */

    /*  const formik = useFormik({
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
    });  */

    const handleRegister =  useCallback( async (data) => {
        console.log("Oi", data);
        try {
            const schema = Yup.object().shape({
                nomeCompleto: Yup.string().required('Nome é obrigatório'),
                email: Yup.string().email('Email inválido!').required('Email é obrigatório!'),
                usuario: Yup.string().required('Usuário obrigatório'),
                senha: Yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Senha requirida!'),
            });
            await schema.validate(data);
            // Submeter os dados para a api.
            showMessage({
                message: "Registro realizado com sucesso",
                type: "success",
            });
            navigation.navigate("Login")
        } catch (error) {
            if (error instanceof Yup.ValidationError){
                showMessage({
                    message: error.message,
                    type: "danger",
                });
            }  console.log(error.message);
            showMessage({
                message: error.message,
                type: "danger",
            });        
        }              

    }, []);

    return (
        <>
                    <View style={styles.container}>
                        <StatusBar
                            barStyle = "light-content"
                            hidden = {false}
                            backgroundColor = "#7600a9"
                            translucent = {false}
                            networkActivityIndicatorVisible = {true}
                        />
                        <ImageBackground style={styles.image} source={require('../../assets/background.jpg')}>
                            {/*    {formik.errors.name ? showMessage({
                        message: errors.name,
                        type: "danger",
                    }) : null}  */}
                    <Image
                        source={require('../../assets/logomobile.png')}
                        style={styles.logo}
                    />
                    <Formik                  
                        enableReinitialize
                        onSubmit={handleRegister}
                        initialValues={{
                            senha:"",
                            nomeCompleto: "",
                            usuario: "",
                            email: "",
                        }}
                        
                    >
                        {({ handleSubmit, values, setFieldValue, handleChange }) => (
                            <>
                                <View>
                                    <TextInput
                                        style={styles.input}
                                        type="text"
                                        placeholder="Insira seu nome"
                                        onChangeText={handleChange('nomeCompleto')} 
                                        value={values.nomeCompleto}
                                        /* onEndEditing={(e)=>{setNomeCompleto ( e.nativeEvent.text)}} */
                                    />
                                    
                                    {/* {formik.errors.name && formik.touched.name ? <Text style={styles.error}>{formik.errors.name}</Text> : null} */}
                                </View>

                                <View>
                                    <TextInput
                                        style={styles.input}
                                        type="text"
                                        placeholder="Insira seu email"
                                        onChangeText={ handleChange('email')}
                                        value={values.email}
                                        /* onEndEditing={(e)=>{setEmail(e.nativeEvent.text)}} */

                                            />
                                            {/* {formik.errors.email && formik.touched.email ? <Text style={styles.error}>{formik.errors.email}</Text> : null} */}
                                        </View>

                                <View>
                                    <TextInput
                                        style={styles.input}
                                        type="text"
                                        placeholder="Insira seu nome de usuário"
                                        onChangeText={handleChange('usuario')} 
                                        value={values.usuario}
                                        /* onEndEditing={(e)=>{setUsuario( e.nativeEvent.text)}} */
                                    />
                                    {/* {formik.errors.user && formik.touched.user ? <Text style={styles.error}>{formik.errors.user}</Text> : null} */}
                                </View>

                                <View>
                                    <TextInput
                                        style={styles.input}
                                        secureTextEntry={true}
                                        placeholder="Insira sua senha"
                                        onChangeText={ handleChange('senha')} 
                                        value={values.senha}
                                        /* onEndEditing={(e)=>{setSenha(e.nativeEvent.text)}} */
                                    />
                                    {/* {formik.errors.password && formik.touched.password ? <Text style={styles.error}>{formik.errors.password}</Text> : null} */}
                                </View>

                                <Button
                                    title="Enviar"
                                    onPress={()=>handleSubmit()}
                                    buttonStyle={styles.button}
                                />
                                 <View style={styles.message}>
                    <Text style={styles.click}>Caso já tenha uma conta clique <Text style={styles.here}
                onPress={()=>navigation.navigate("Login")}>aqui </Text></Text>
                </View>
                            </>
                        )}
                    </Formik>
                </ImageBackground>
            </View >
        </>
    );
};

export default Register;