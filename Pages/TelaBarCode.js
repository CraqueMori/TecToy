import SunmiPrinter from '@heasy/react-native-sunmi-printer';
import { useState } from "react";
import { View, Image, TouchableOpacity, Text, ScrollView, Button } from 'react-native';
import { TextInput, Modal } from 'react-native';
import { Dimensions, StyleSheet } from 'react-native';
import Barcode from '@kichiyaki/react-native-barcode-generator';

export default function TelaBarCode() {
  const [alinhamento, setAlinhamento] = useState(1)
  const [texto, setTexto] = useState()
  const [posicao, setPosicao] = useState(1)

  const [acima, setCima] = useState(true)
  const [abaixo, setBaixo] = useState(false)

  const [checked1, set1] = useState(false)
  const [checked2, set2] = useState(true)
  const [checked3, set3] = useState(false)

  const [visivel1, setVisivel1] = useState(false)
  const [visivel2, setVisivel2] = useState(false)
  const [visivel3, setVisivel3] = useState(false)

  const [UPCA, setUPCA] = useState(true)
  const [UPCE, setUPCE] = useState(false)
  const [EAN13, setEAN13] = useState(false)
  const [EAN8, setEAN8] = useState(false)
  const [Model, setModel] = useState("EAN18")

  const PrintBarCode = () => {
    SunmiPrinter.printerText("  \n                               ")
    SunmiPrinter.printerText("  \n                               ")
    SunmiPrinter.setFontWeight(true);
    SunmiPrinter.setAlignment(alinhamento)
    SunmiPrinter.printBarCode(texto, (UPCA ? 0 : (UPCE ? 1 : (EAN13 ? 2 : 3))), 162, 6, posicao)
    SunmiPrinter.printerText(" \n                              ")
    SunmiPrinter.printerText("  \n                               ")
    SunmiPrinter.printerText("  \n                               ")
    SunmiPrinter.printerText("  \n                               ")
  }

  return (
    <ScrollView>
      <View style={styles.V}>
          <Text style={styles.TextTitle}>Insira o BarCode:</Text>

          <TextInput
            style={styles.textInputSt}
            defaultValue={texto}
            onChangeText={newText => setTexto(newText)} >
          </TextInput>
        

        <View >
          <Text style={styles.TextAlinhamento}>Alinhamento:</Text>
          <View >
            <Modal
              visible={visivel1}
              onRequestClose={() => setVisivel1(false)}
            >
              <View style={styles.modal}>
                <Button style={{ flex: 1 }} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='Esquerda' checked={checked1} onPress={() => (set1(true), set2(false), set3(false), setAlinhamento(0), setVisivel1(false))} />
                <Button style={{ flex: 1 }} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='Centro' checked={checked2} onPress={() => (set1(false), set2(true), set3(false), setAlinhamento(1), setVisivel1(false))} />
                <Button style={{ flex: 1 }} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='Direita' checked={checked3} onPress={() => (set1(false), set2(false), set3(true), setAlinhamento(2), setVisivel1(false))} />
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setVisivel1(true)}>
              <Text style={styles.texto2}>{checked1 ? 'esquerda' : checked2 ? 'centro' : 'direita'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.v2}>
          <Text style={styles.TextModel}>Escolha o Modelo:</Text>
          <Modal
            visible={visivel2}
            onRequestClose={() => setVisivel2(false)}
          >
            <View style={styles.ViewModel}>
              <Text style={styles.TextModel}>Modelo:</Text>
              
                <View style={{ flexDirection: 'row' }}>
                  <Button style={{ flex: 1 }} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='UPC-A ' checked={UPCA} onPress={() => (setUPCA(true), setUPCE(false), setEAN13(false), setEAN8(false), setModel("UPCA"), setVisivel2(false))} />
                  <Button style={{ flex: 1 }} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='UPC-E ' checked={UPCE} onPress={() => (setUPCA(false), setUPCE(true), setEAN13(false), setEAN8(false), setModel("UPCE"), setVisivel2(false))} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Button style={{ flex: 1 }} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='EAN-13' checked={EAN13} onPress={() => (setUPCA(false), setUPCE(false), setEAN13(true), setEAN8(false), setModel("EAN13"), setVisivel2(false))} />
                  <Button style={{ flex: 1 }} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='EAN-8 ' checked={EAN8} onPress={() => (setUPCA(false), setUPCE(false), setEAN13(false), setEAN8(true), setModel("EAN8"), setVisivel2(false))} />
                </View>
              
            </View>
          </Modal>
          <TouchableOpacity onPress={() => setVisivel2(true)}>
            <Text style={styles.Texto3}>{EAN13 ? 'EAN13' : EAN8 ? 'EAN8' : UPCA ? 'UPCA' : 'UPCE'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.v2}>
        <Text style={styles.TextodePos}>Posição do Codigo:</Text>
          <Modal
            visible={visivel3}
            onRequestClose={() => setVisivel3(false)}
          >
            
            <View style={{ flexDirection: 'column' }}>
              <Button title='Acima' uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} checked={acima} onPress={() => (setCima(true), setBaixo(false), setPosicao(1), setVisivel3(false))} />
              <Button title='Abaixo' uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} checked={abaixo} onPress={() => (setBaixo(true), setCima(false), setPosicao(2), setVisivel3(false))} />
            </View>
          </Modal>
          
          <TouchableOpacity onPress={() => setVisivel3(true)}>
            <Text style={styles.Texto4}>{acima ? 'Acima' : 'Abaixo'}</Text>
          </TouchableOpacity>
        </View>

        <View style= {styles.ViewBarCode}>
        <Barcode format={Model} value={texto} text={texto} height={100} width={3} />
        </View>

        <View style={styles.ViewImprime}>
          <TouchableOpacity onPress={PrintBarCode}>
            <Text style={styles.Texto5}>Imprime</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
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
  ViewInicial: {
  
  },
  ViewModel:{
    
  },
  v2: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  textInputSt: {
    backgroundColor: 'black' ,
    color: 'white', 
    width: 350,
    height: 50,
    top:"-4%",
    marginRight:"2%",
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
  V: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'black',
    padding: '10%',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center'
  },
  modal: {
    marginTop: "75%",
    flexDirection: 'row',
    alignSelf: 'center'
  },
  texto2: {
    fontSize: 20,
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    height:50,
    width:350,
    right:"-2%",
    top:"-90%",
    borderBottomColor:"silver",
    borderTopColor:"silver",
    borderLeftColor:"silver",
    borderRightColor:"silver",
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth:1,
    color:"silver",

  },
  Texto3 :{

    fontSize: 20,
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    height:50,
    width:350,
    right:"51%",
    top:"-20%",
    borderBottomColor:"silver",
    borderTopColor:"silver",
    borderLeftColor:"silver",
    borderRightColor:"silver",
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth:1,
    color:"silver",

  },
  Texto4 :{

    fontSize: 20,
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    height:50,
    width:350,
    right:"25%",
    top:"60%",
    borderBottomColor:"silver",
    borderTopColor:"silver",
    borderLeftColor:"silver",
    borderRightColor:"silver",
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth:1,
    color:"silver",
  },

  Texto5: {
    fontSize: 20,
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    height:50,
    width:370,
    right:"1%",
    top:"222%",
    borderBottomColor:"silver",
    borderTopColor:"silver",
    borderLeftColor:"silver",
    borderRightColor:"silver",
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth:1,
    color:"silver",
  },

  TextTitle:{
    color:"silver",
    top: "-5%",
    right:"1%",
    fontSize: 20,
  },
  TextodePos:{
    color:"silver",
    top: "-5%",
    right:"-350%",
    fontSize: 20,
  },
  TextAlinhamento:{
    height: 50, 
    width: 360, 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize: 16, 
    top:"-38%",
    right:"-2%",
    fontSize:20,
    color: "silver"
  },
  TextModel: {
    height: 50, 
    width: 360, 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize: 16, 
    fontSize:20,
    color: "silver",
    right:"-350%",
    top:"-20%"
  },
  TextPos:{
    height: 50, 
    width: 360, 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize: 16, 
    top:"-8%",
    fontSize:20,
    color: "silver"
  },
  TextImprime:{
    height: 50, 
    width: 360, 
    textAlignVertical: 'center', 
    textAlign: 'center', 
    fontSize: 16, 
    top:"-8%",
    fontSize:20,
    color: "silver"
  },
  ViewBarCode:{
    top:"9%"
  },
})