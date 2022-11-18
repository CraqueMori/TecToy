import SunmiPrinter from '@heasy/react-native-sunmi-printer';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';
import QRCode from "react-native-qrcode-svg";
import { Modal } from 'react-native';
import { width } from 'cli';
import { Button } from 'react-native-paper'


export default function TelaQrCode() {
  const [tamanho, setTamanho] = useState(6)
  const [texto, setTexto] = useState('www.tectoySunmi.com.br')
  const [alinhamento, setAlinhamento] = useState(1)
  const [checked1, set1] = useState(false)
  const [checked2, set2] = useState(true)
  const [checked3, set3] = useState(false)
  const [visivel, setVisivel] = useState(false)

  function printQRCode() {
    SunmiPrinter.setFontWeight(true)
    SunmiPrinter.setAlignment(alinhamento)
    SunmiPrinter.printQRCode(texto, tamanho, 1)
  }

  function aumenta() {
    if (Number(tamanho) < 8) {
      setTamanho(Number(tamanho) + 1)
    }
  }

  function diminui() {
    if (Number(tamanho) > 2) {
      setTamanho(Number(tamanho) - 1)
    }
  }

  return (
    <View style={styles.V}>
      <Text style={styles.TextTitle}>Link do QRCode:</Text>

      
        <TextInput
          style={styles.TextInput}
          defaultValue={texto}
          onChangeText={newText => setTexto(newText)} >
        </TextInput>

      <View style={styles.ViewTamanho}>

        <Text style={styles.TextQRCode}>Escolha o Tamanho do Código:  </Text>

        

          <Button style={styles.subtrador} mode= "contained" onPress={diminui}> -1 </Button>

          <Text style={styles.TextTamanho}> {tamanho} </Text>

          <Button style={styles.somadores} mode= "contained" onPress={aumenta}> +1 </Button> 
          
      </View>

      <View style={styles.ViewModal}>

      <Text style={styles.TextQRCode2}>Alinhamento:</Text>

        <Modal visible={visivel} onRequestClose={() => setVisivel(false)}>

          <Text style={styles.TextQRCode4}>Alinhamento:</Text>

          <View style={styles.Colunas}>
            <CheckBox style={{ flex: 1 }} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='Esquerda' checked={checked2} onPress={() => (set1(true), set2(false), set3(false), setAlinhamento(0), setVisivel(false))} />
            <CheckBox style={{ flex: 1 }} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='Centro' checked={checked2} onPress={() => (set1(false), set2(true), set3(false), setAlinhamento(1), setVisivel(false))} />
            <CheckBox style={{ flex: 1 }} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='Direita' checked={checked3} onPress={() => (set1(false), set2(false), set3(true), setAlinhamento(2), setVisivel(false))} />
          </View>

        </Modal>

        <TouchableOpacity onPress={() => setVisivel(true)}>

          <Text style={styles.TextQRCode3}>{checked1 ? 'Esquerda' : checked2 ? 'Centro' : 'Direita'}</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.ViewQRCode}>

        <QRCode style={styles.ViewQRCode2} value={texto} size={tamanho * 14} />

      </View>



        <TouchableOpacity onPress={printQRCode}>

          <Text style={styles.texto2}>Imprimir</Text>

        </TouchableOpacity>



    </View>
  );
}

const styles = StyleSheet.create({
  V: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'black',
    padding: '10%',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center'
  },

  ViewTamanho: {
    top:"4%",
  },
 
  somadores: {
    height: 36, 
    width: 50, 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize: 16, 
    backgroundColor: '#d94307',
    top:'-51%',
    right:"-75%",
    
  }, 

  subtrador: {
    height: 36, 
    width: 50, 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize: 16, 
    backgroundColor:'#d94307',
    top:'-5%',
    right:"-30%",
  },

  ViewQRCode: {
    top: "10%",
    width:220,
    height:160,
    backgroundColor:"black",
    right:"-25%",

  },

  ViewQRCode2:{
    top:"400%",
  },
  ViewQRCode3:{
    
  },
  TextTitle: {
    color:"silver",
    borderRightWidth:10,
    borderRightHeight:10,
    top: "-3%",
    fontSize: 20,
  },

  TextInput: {
    backgroundColor: '#201f21' ,
    color: 'white', 
    width: 358,
    height: 50,
    top:"-1%",
    marginRight:"1%",
    marginLeft:"1%",
    textAlign:"center",
    borderBottomColor:"silver",
    borderTopColor:"silver",
    borderLeftColor:"silver",
    borderRightColor:"silver",
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth:1,

  },

   TextTamanho:{ 
    height: 36, 
    width: 50, 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize: 16, 
    backgroundColor: 'silver',
    top:'-27%',
    right:"-55%"
    

  },
  
  TextQRCode:{ 
    height: 50, 
    width: 360, 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize: 16, 
    top:"-8%",
    fontSize:20,
    color: "silver"
  },

  TextQRCode2:{ 
    height: 50, 
    width: 360, 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize: 16, 
    top:"20%",
    fontSize:20,
    color: "silver",
  },

  TextQRCode3: {
    backgroundColor: '#201f21' ,
    color: 'silver', 
    width: 358,
    height: 50,
    top:"30%",
    marginRight:"1%",
    marginLeft:"1%",
    borderBottomColor:"silver",
    borderTopColor:"silver",
    borderLeftColor:"silver",
    borderRightColor:"silver",
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth:1,
    fontSize:20,
    textAlign:'center'

  },
  TextQRCode4: {
    color: 'silver', 
    fontSize:20,
    textAlign:'center',
    height:50,
    width: 360,
    backgroundColor: "black",
    borderBottomColor:"silver",
    borderTopColor:"silver",
    borderLeftColor:"silver",
    borderRightColor:"silver",
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth:1,
    
  },

  button: {
    marginTop:"50%",
    alignItems: 'center',
    width:360,
    height:45,
    backgroundColor:"#ff1404",
    justifyContent:"center"
    
  },
  ViewModal:{
    
    marginTop:"-20%"
  },
  texto2: {
    fontSize: 20,
    color: 'white',
    top:"160%",
    backgroundColor:"#d94307",
    alignItems: 'center',
    width:360,
    height:45,
    backgroundColor:"#ff1404",
    justifyContent:"center",
    alignText:"center",
    textAlign:"center"

  },
  Colunas: {
    flexDirection: 'column',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor:"black"
  }
})

