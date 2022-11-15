import SunmiPrinter from '@heasy/react-native-sunmi-printer';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { CheckBox } from "react-native-elements";
import { StyleSheet } from "react-native";
import { TextInput } from 'react-native';
import { Dimensions } from 'react-native';

export default function TelaText() {
  const [texto, setTexto] = useState('Hello World! Olá Mundo!')
  const [tam, setTam] = useState(18)
  const [bold, setBold] = useState(false)
  const [underline, setunder] = useState(false)
  const [alinhamento, setAlinhamento] = useState(1)
  const [checked1, set1] = useState(false)
  const [checked2, set2] = useState(true)
  const [checked3, set3] = useState(false)
  const Underline_Value = 1003
  const Bold_Value = 1002

  const PrinterText = () => {
    SunmiPrinter.setFontSize(tam);
    SunmiPrinter.setFontWeight(true);
    SunmiPrinter.setAlignment(alinhamento)
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
      <View style={styles.visao}>
        <Text>Texto:          </Text>
        <TextInput
          style={styles.input}
          defaultValue={texto}
          onChangeText={newText => setTexto(newText)} >
        </TextInput>
      </View>

      <View style={styles.visao}>
        <Text>tamanho:   </Text>
        <TouchableOpacity onPress={diminui}>
          <Text style={styles.texto}>-</Text></TouchableOpacity>
        <Text style={styles.t}> {tam} </Text>
        <TouchableOpacity onPress={aumenta}>
          <Text style={styles.texto}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.visao}>
        <Text>Alinhamento:</Text>
        <View style={{ flexDirection: 'column' }}>
          <CheckBox style={{ flex: 1 }} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='Esquerda' checked={checked1} onPress={() => (set1(true), set2(false), set3(false), setAlinhamento(0))} />
          <CheckBox style={{ flex: 1 }} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='Centro' checked={checked2} onPress={() => (set1(false), set2(true), set3(false), setAlinhamento(1))} />
          <CheckBox style={{ flex: 1 }} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='Direita' checked={checked3} onPress={() => (set1(false), set2(false), set3(true), setAlinhamento(2))} />
        </View>
      </View>

      <View style={styles.visao}>
        <CheckBox uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='Negrito' checkedColor="blue" checked={bold} onPress={() => setBold(!bold)} />
        <CheckBox uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')} />} checkedIcon={<Image source={require('./assets/checkedIcon.png')} />} title='Sublinhado' checkedColor="orange" checked={underline} onPress={() => setunder(!underline)} />
      </View>

      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={PrinterText}>
          <Text style={styles.texto}>Imprime</Text>
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
  V: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'lightgrey',
    flexDirection: 'column',
    alignItems: 'baseline',
    alignSelf: 'center'
  },
  t: {
    fontSize: 20,
    backgroundColor: 'darkgrey',
    height: 36
  },
  texto: {
    alignSelf: 'center',
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white',
    padding: 5,
    textAlign: "center"
  },
  input: {
    backgroundColor: 'darkgrey',
    color: 'black',
    width: 120
  }
})
