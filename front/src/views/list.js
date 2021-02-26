import React from 'react';
import { View,StyleSheet, Text,TextInput } from 'react-native';
import list from '../list';

const List = (props) => {
    
    const dados = [


{
    "idproduto": "1",
    "categoria": "geladeira",
    "descricao": "Geladeira Frost Free Brastemp Side Inverse 540 litros",
    "imagem": "imagens/Produtos/geladeira%20brastemp.jpg",
    "preco": "6389",
    "precofinal": "5019"
  },
  {
    "idproduto": "5",
    "categoria": "fogao",
    "descricao": "Fogão Brastemp Branco 6 Bocas",
    "imagem": "imagens/Produtos/fogao%20brastemp.jpg",
    "preco": "2650",
    "precofinal": "2150"
  },
  {
    "idproduto": "3",
    "categoria": "geladeira",
    "descricao": "Geladeira Consul Frost Free Duplex Branco 340 litros",
    "imagem": "imagens/Produtos/geladeira%20consul.png",
    "preco": "3350",
    "precofinal": "2750"
  },
  {
    "idproduto": "4",
    "categoria": "geladeira",
    "descricao": "Geladeira Electrolux Top Free Branco 474 litros",
    "imagem": "imagens/Produtos/geladeira%20electrolux.png",
    "preco": "3350",
    "precofinal": "2900"
  },
  {
    "idproduto": "6",
    "categoria": "fogao",
    "descricao": "Fogão Consul Inox 5 Bocas",
    "imagem": "imagens/Produtos/fogao%20consul.png",
    "preco": "1350",
    "precofinal": "1250"
  },
  {
    "idproduto": "7",
    "categoria": "micro-ondas",
    "descricao": "Micro-ondas Brastemp Inox 20 litros",
    "imagem": "imagens/Produtos/micro-ondas%20brastemp.png",
    "preco": "1250",
    "precofinal": "1050"
  },
  {
    "idproduto": "8",
    "categoria": "micro-ondas",
    "descricao": "Micro-ondas Consul Puxador na Porta 20 litros",
    "imagem": "imagens/Produtos/micro-ondas%20consul.png",
    "preco": "800",
    "precofinal": "600"
  },
  {
    "idproduto": "9",
    "categoria": "micro-ondas",
    "descricao": "Micro-ondas Electrolux 20 litros",
    "imagem": "imagens/Produtos/micro-ondas%20electrolux.jpg",
    "preco": "900",
    "precofinal": "500"
  },
  {
    "idproduto": "10",
    "categoria": "lavadora de roupas",
    "descricao": "Lavadora de roupas Brastemp 9kg com Ciclo Tira Manchas e Enxágue Duplo",
    "imagem": "imagens/Produtos/lavadora%20brastemp.png",
    "preco": "2350",
    "precofinal": "1750"
  },
  {
    "idproduto": "11",
    "categoria": "lavadora de roupas",
    "descricao": "Lavadora de roupas Consul 9kg Branca",
    "imagem": "imagens/Produtos/lavadora%20consul.jpg",
    "preco": "1350",
    "precofinal": "1050"
  },
  {
    "idproduto": "12",
    "categoria": "lava-louças",
    "descricao": "Lava-louças Brastemp 14 serviços Inox com Ciclo Pesado",
    "imagem": "imagens/Produtos/lava-lou%C3%A7as%20brastemp.jpg",
    "preco": "4350",
    "precofinal": "3950"
  },
  {
    "idproduto": "13",
    "categoria": "lava-louças",
    "descricao": "Lava-louças Electrolux 14 serviços Inox",
    "imagem": "imagens/Produtos/lava-lou%C3%A7a%20electrolux.jpg",
    "preco": "6350",
    "precofinal": "5750"
  }
]
}]



export default List

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ff5100e3",
    textAlign:'center',
},

label: {
    fontSize:15,
    color:'#c3c634',
    fontWeight:'bold',
    textAlign:'left'
},
input:{
    color: 'green',
    height:40,
    backgroundColor:'#ffffff',
    width:'70%',
    padding:3,
},
content:{
    backgroundColor:'#e4ec7b',
    padding: 15,
},
  
})