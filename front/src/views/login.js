import React from 'react';
import { View,StyleSheet,TextInput, Button, Text } from 'react-native';


const Login = ({ navigation }) => {
    return (
            <View style={styles.container}>
              

                <View style={styles.frm}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput style={styles.input} placeholder="Email" />

                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={styles.input} placeholder="Senha" />
                    
                    <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Login"
                    />
                </View>
            </View>
    );
};

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ff5100e3",
        textAlign:'center',
    },
    frm:{
        textAlign:'center',
        width:'50%',
        height:200,
        padding:15,
        paddingTop:'auto', 
        paddingBottom:'auto',  
        borderStyle:'solid',
        borderColor:'white',
        borderRadius:5,
        borderWidth:1,
        marginTop:15,
    },
    label: {
        fontSize:20,
        color:'#primary',
        fontWeight:'bold',
    },
    input:{
        color: 'primary',
        height:40,
        backgroundColor:'#ccc'
    },
    
})