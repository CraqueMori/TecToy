import SunmiPrinter from '@heasy/react-native-sunmi-printer';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { CheckBox } from "react-native-elements";
import { StyleSheet } from "react-native";
import { TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import { Button } from 'react-native-paper'

export default function TelaText() {
  const Underline_Value = 1003
  const Bold_Value = 1002
  const [texto, setTexto] = useState('Hello World! Olá Mundo')
  const [tam, setTam] = useState(18)
  const [bold, setBold] = useState(false)
  const [underline, setunder] = useState(false)

  const PrinterText = () => {
    SunmiPrinter.setFontSize(tam);
    SunmiPrinter.setFontWeight(true);
    SunmiPrinter.setPrinterStyle(Bold_Value, bold ? 1 : 2)
    SunmiPrinter.setPrinterStyle(Underline_Value, underline ? 1 : 2)
    SunmiPrinter.printerText(texto)
  }

  function aumenta() {
    if (Number(tam) < 30) {
      setTam(Number(tam) + 2)
    }
  }

  function diminui() {
    if (Number(tam) > 2) {
      setTam(Number(tam) - 2)
    }
  }

  return (
    <View style={styles.V}>
      
        <Text style={styles.TextTitle} >Insira o Texto</Text>
        <TextInput style={styles.TextInput} defaultValue={texto} onChangeText={newText => setTexto(newText)}></TextInput>

      <View style={styles.ViewTamanho}>
        <Text style={styles.TextQRCode}>Escolha o Tamanho da Fonte:  </Text>


        <Button style={styles.subtrador} mode= "contained" onPress={diminui}> -2 </Button>

        <Text style={styles.TextTamanho}> {tam} </Text>

        <Button style={styles.somadores} mode= "contained" onPress={aumenta}> +2 </Button> 
      </View>

      <View style={styles.visao}>
        <CheckBox style = {styles.CheckBox} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='Negrito' checkedColor="blue" checked={bold} onPress={() => setBold(!bold)} />
        <CheckBox style = {styles.CheckBox} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='Sublinhado' checkedColor="orange" checked={underline} onPress={() => setunder(!underline)} />
      </View>

      <View style={styles.visao}>
        <TouchableOpacity onPress={PrinterText}>
          <Text style={styles.texto2}>Imprime</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white',
    padding: 5,
    width: 30,
    textAlign: 'center'
  },
  visao: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 2,
    flex: 1
  },
  t: {
    fontSize: 20,
    backgroundColor: 'darkgrey',
    height: 36
  },
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
    top:"10%",
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
  },
    CheckBox:{
      color:"silver"
    },
})
