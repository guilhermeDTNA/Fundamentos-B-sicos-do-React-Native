import React, { Component } from 'react'; //Importa o componente do projeto
import { View, Text, StyleSheet, Button, Image, TextInput, Alert } from 'react-native'; //Importa componentes menores (do Native)

/*Criando um componente*/

//props= informações estáticas de componentes
//state= informações multáveis de componentes
class Imagem extends Component{

  render(){

    let imagem = {
      uri:'https://guilhermerocha.tk/img/'+this.props.nome+'.jpg'
    };

  return (

    <Image source={imagem} style={{width:parseInt(this.props.largura), height:parseInt(this.props.altura)}}  />

  );    

  }
}

class Janta extends Component{

  constructor(props){
    super(props);
    this.state = {comida:props.comida};
    let comidas = ['Pizza', 'Lasanha', 'Burger', 'Sopa', 'Arroz'];


    setInterval(() => {
        this.setState(previousState => {
          //Seleciona aleatoriamente a posição do vetor
          var n = Math.floor(Math.random()*comidas.length);

          return {comida: comidas[n]};
        });
      }, 1000) //1000 milisegundos
  }

  render(){
    return (
      <View>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20, color:'red'}}>Escolha seu prato:</Text>
        <Text style={{textAlign:'center', fontSize:30}}> {this.state.comida} </Text> 
      </View>

      )
  }

}

export default class Modulo1 extends Component{

constructor(props){
  super(props);
  this.state={inputComBotao:'', texto:''};

//Permite à função acessar props ou states do componente
  this.mudarTexto = this.mudarTexto.bind(this);

  this.apertou = this.apertou.bind(this);
}

mudarTexto(t){

  //Puxa todo o state
  let s = this.state;
  //ALtera de acordo com o que receber
  s.texto = 'Olá, '+t;
  //Substitui novamente no state
  this.setState(s);
}

apertou(){
  
  let s = this.state;
  s.texto = 'Olá, '+s.inputComBotao;
  this.setState(s);
}

/*Nunca coloque comentários dentro de funções de retorno*/

//Diferença entre let e var: let deixa a variável visível só para um bloco
//JFX: interpreta exatamente o que está escrito. Para executar código JavaScript, use {}

//Funções anônimas: (parâmetros)=>{instruções}

somar(n1, n2){
  return n1+n2;
}

  render(){

    let nome="Guilherme";

//Flex dinamiza o tamanho das Views
//Atributos que podem acompanhar o Flex (Pesquisar mais sobre): flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'green'
    return(
        <View style={{paddingTop:20, flex:2, backgroundColor:'black'}}> 

          <View style={{flex:3, backgroundColor:'white'}}>

            <Text>Olá Mundo</Text>
            <Text>Meu nome é {nome}</Text>

            <Image source={{uri:'https://guilhermerocha.tk/img/profile3.jpg'}} style={{width:50, height:50}} />
            <Imagem nome='lattes' altura='100' largura='100' />

            <Janta comida='Bolacha' />

            <Text style={styles.titulo}>Título</Text>
            <Text style={styles.subTitulo}>subTítulo</Text>
            <Text style={styles.paragrafo}>Parágrafo</Text>

          </View>

          <View style={{flex:1, backgroundColor:'white'}}>
          <TextInput style={styles.input}  placeholder="Qual é o seu nome?" onChangeText={this.mudarTexto} ></TextInput>
          <Text style={styles.texto}>{this.state.texto}</Text>

          <TextInput style={styles.input}  placeholder="Qual é o seu nome?" onChangeText={(inputComBotao)=>this.setState({inputComBotao}) } ></TextInput>
          <Button title="Aperte" onPress={this.apertou}> </Button>


          </View>

        </View>

      );
  }

}

//Tipo CSS
const styles=StyleSheet.create({
  texto:{
    fontSize:30, //Não são pixels, mas sim pontos
    color:'red'
  },

  titulo:{
    fontSize:40,
    color:'black',
    fontWeight:'bold',
    textAlign:'center'
  },

  subTitulo:{
    fontSize:30,
    color:'grey',
    fontStyle:'italic',
    textAlign:'left'
  },

  paragrafo:{
    fontSize:20,
    color:'black',
    textAlign:'justify'
  },

  //Para o TextInput
  input:{
    height:40,
    borderWidth:1,
    borderColor:'black',
    margin:10,
    padding:10
  },

  texto:{
    fontSize:20,
    textAlign:'center'
  }

});

