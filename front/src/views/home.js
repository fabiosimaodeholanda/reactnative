import React from 'react';
import { View,StyleSheet, Text, TouchableOpacity, Link } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = (props) => {
    return (
            <View style={styles.container}>
               
      
                    
                    {"\n"}
                <View style={styles.content}>
                    <Text  style={styles.titulo}>Seja bem vindo</Text>
                    <Text style={styles.paragrafo}>curta as promoções </Text>
                   
                </View>
                <TouchableOpacity onPress={() => Link.openURL('https://www.facebook.com/?hl=pt-br')}>
                    <Text style={styles.facebook}> Siga nosso facebook </Text> 
                    <MaterialCommunityIcons name="facebook" color='white' size={40} />    
                </TouchableOpacity>
            </View>
        );
};

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ff5100e3",
        textAlign:'center',
    },
    paragrafo:{
        textAlign:'center',
        color:'#fff',
    },
    
    titulo:{
        fontSize:156,
        color: '#000',
        fontWeight:'bold',
    },
    facebook:{
        fontWeight:'bold',
        color: 'white',
        fontSize:15,
        textAlign:'center',
        borderWidth:2,
        borderStyle:'fff',
        marginTop:5,
    },
    content:{
        padding: 15,
    }
})