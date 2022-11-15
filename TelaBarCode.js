import SunmiPrinter from '@heasy/react-native-sunmi-printer';
import { useState } from "react";
import {View,Image,TouchableOpacity, Text} from 'react-native';
import { TextInput } from 'react-native';
import {CheckBox} from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export default function TelaBarCode(){
    const [alinhamento,setAlinhamento] = useState(1)
    const [texto, setTexto] = useState()
    const [posicao,setPosicao] = useState(1)

    const [acima,setCima]=useState(true)
    const [abaixo,setBaixo]=useState(false)

    const [checked1,set1]=useState(false)
    const [checked2,set2]=useState(true)
    const [checked3,set3]=useState(false)

    const [UPCA,setUPCA]=useState(true)
    const [UPCE,setUPCE]=useState(false)
    const [EAN13,setEAN13]=useState(false)
    const [EAN8,setEAN8]=useState(false)
    
    const PrintBarCode = () => {
       SunmiPrinter.setFontWeight(true);
       SunmiPrinter.setAlignment(alinhamento)
       SunmiPrinter.printBarCode(texto, (UPCA?0:(UPCE?1:(EAN13?2:3))), 162, 6,posicao)
    }
   
    const styles = StyleSheet.create({
      texto:{
        fontSize:20,
        backgroundColor:'blue',
        color:'white',
        padding:5,
        width:30,
        textAlign:'center'
      },
      v1:{
        alignSelf:'center',
        alignItems:'center',
        flexDirection:'row',
        padding:2,
        flex:1
      },
      v2:{
        alignSelf:'center',
        alignItems:'center',
        flexDirection:'row',
        padding:2,
        flex:2
      },
      textInputSt:{
        backgroundColor: 'darkgrey',
        color:'black',
        width:120
      },
      V:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        backgroundColor:'lightgrey',
        flexDirection:'column',
        alignItems:'center',
        alignSelf:'center',
        padding:'10%'
      }
    })
  
    return(
      <View style={styles.V}>
        <View style={styles.v1}>
          <Text>BarCode:       </Text>
          <TextInput
             
            style={styles.textInputSt}
            defaultValue={texto}
            onChangeText={newText => setTexto(newText)} >        
          </TextInput>
        </View>
  
        <View style={styles.v2}>      
            <Text>Alinhamento:</Text>
            <View style={{flexDirection:'column'}}>
              <CheckBox style={{flex:1}} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')}/>} checkedIcon={<Image source={require('./assets/checkedIcon.png')}/>} title='Esquerda' checked={checked1} onPress={()=>(set1(true),set2(false),set3(false),setAlinhamento(0))}/>
              <CheckBox style={{flex:1}} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')}/>} checkedIcon={<Image source={require('./assets/checkedIcon.png')}/>} title='Centro' checked={checked2} onPress={()=>(set1(false),set2(true),set3(false),setAlinhamento(1))}/>
              <CheckBox style={{flex:1}} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')}/>} checkedIcon={<Image source={require('./assets/checkedIcon.png')}/>} title='Direita' checked={checked3} onPress={()=>(set1(false),set2(false),set3(true),setAlinhamento(2))}/>
            </View>
        </View>   

        <View style={styles.v2}>      
            <Text>Modelo:</Text>
            <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row'}}>
                   <CheckBox style={{flex:1}} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')}/>} checkedIcon={<Image source={require('./assets/checkedIcon.png')}/>} title='UPC-A ' checked={UPCA} onPress={()=>(setUPCA(true),setUPCE(false),setEAN13(false),setEAN8(false))}/>
                   <CheckBox style={{flex:1}} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')}/>} checkedIcon={<Image source={require('./assets/checkedIcon.png')}/>} title='UPC-E ' checked={UPCE} onPress={()=>(setUPCA(false),setUPCE(true),setEAN13(false),setEAN8(false))}/>
                </View>
                <View style={{flexDirection:'row'}}>
                   <CheckBox style={{flex:1}} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')}/>} checkedIcon={<Image source={require('./assets/checkedIcon.png')}/>} title='EAN-13' checked={EAN13} onPress={()=>(setUPCA(false),setUPCE(false),setEAN13(true),setEAN8(false))}/>
                   <CheckBox style={{flex:1}} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')}/>} checkedIcon={<Image source={require('./assets/checkedIcon.png')}/>} title='EAN-8 ' checked={EAN8} onPress={()=>(setUPCA(false),setUPCE(false),setEAN13(false),setEAN8(true))}/>
                </View> 
            </View>
        </View>    

        <View style={styles.v2}>
          <Text>posição do codigo:</Text>
          <View style={{flexDirection: 'column'}}>
            <CheckBox title='Acima' uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')}/>} checkedIcon={<Image source={require('./assets/checkedIcon.png')}/>} checked={acima} onPress={()=>(setCima(true),setBaixo(false),setPosicao(1))}/>
            <CheckBox title='Abaixo' uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')}/>} checkedIcon={<Image source={require('./assets/checkedIcon.png')}/>} checked={abaixo} onPress={()=>(setBaixo(true),setCima(false),setPosicao(2))}/>
          </View>
        </View>
        
        <View style={{flex:1.2}}>
            <TouchableOpacity onPress={PrintBarCode}>
                <Text style={{ 
                   fontSize:20,
                   backgroundColor:'blue',
                   color:'white',
                   padding:2,
                   textAlign:'center' 
                }}>Imprime</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }