import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
    Image
} from 'react-native';

//import db from '../config';
//import firebase from 'firebase'

export default class LoginScreen extends Component {
    constructor() {
        super()
        this.state = {
            emailId: "",
            password: "",
            confirmPassword: ""
        }
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View>
                    <Text style={styles.title}>NOTES APP</Text>
                    <Image source={require('../assets/img.png')} style={styles.logo} />
                </View>
                <View>
                    <TextInput style={styles.loginbox}
                        placeholder='Email Id'
                        onChangeText={(text) => {
                            this.setState({
                                emailId: text
                            })
                        }}
                        keyboardType={'email-address'} />

                    <TextInput style={styles.loginbox}
                        placeholder='Password'
                        onChangeText={(text) => {
                            this.setState({
                                password: text
                            })
                        }}
                        secureTextEntry={true} />
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        height: 200,
        width: 300,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
        margin: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginbox:{
        height:50,
        width:300,
        borderWidth:1.5,
        borderRadius:10,
        marginTop:20,
        fontSize:18
    },
    loginButton:{
        width:100,
        height:40,
        backgroundColor:'orange',
        borderRadius:10,
        margin:20,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontWeight:"bold",
        fontSize:18,
        color:'#CBE7EC'
    }
})
