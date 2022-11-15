import SunmiPrinter from '@heasy/react-native-sunmi-printer';
import {View, Text,Image, TouchableOpacity} from 'react-native';
import { useState} from 'react';
import {CheckBox} from 'react-native-elements';
import { StyleSheet,TextInput } from 'react-native';
import React from 'react';
import { width } from 'cli';
import { Dimensions } from 'react-native';


export default function TelaQrCode(){
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height; 
    const [tamanho, setTamanho] = useState(6)
    const [texto, setTexto] = useState('www.tectoySunmi.com.br')
    const [alinhamento, setAlinhamento] = useState(1)
    const [checked1,set1]=useState(false)
    const [checked2,set2]=useState(true)
    const [checked3,set3]=useState(false)

    function printQRCode() {
        SunmiPrinter.setFontWeight(true)
        SunmiPrinter.setAlignment(alinhamento)
        SunmiPrinter.printQRCode(texto, tamanho, 1)
    }
    
    function aumenta(){
        if(Number(tamanho)<8){
          setTamanho(Number(tamanho)+1)
        }
    }
    
    function diminui(){
        if(Number(tamanho)>2){
          setTamanho(Number(tamanho)-1)
        }
    }
    
    return(
        <View style={styles.V}>
          <View style={styles.v1}>
            <Text>QRCode: </Text>
            <TextInput 
              style={{backgroundColor: 'darkgrey',color:'black'}}
              defaultValue={texto}
              onChangeText={newText => setTexto(newText)} >        
            </TextInput>
          </View>
    
          <View style={styles.v1}>
            <Text>QR-Code tamanho:  </Text>
            <TouchableOpacity onPress={diminui}>
              <Text style={styles.texto}>-1  </Text>
            </TouchableOpacity>
            <Text style={{height:36,width:50,textAlignVertical:'center',textAlign:'center',fontSize:16,backgroundColor:'darkgrey'}}> {tamanho} </Text>
            <TouchableOpacity onPress={aumenta}>
              <Text style={styles.texto}>+1  </Text>  
            </TouchableOpacity>
          </View>
    
          <View style={styles.v1}>      
            <Text>Alinhamento:</Text>
            <View style={{flexDirection:'column'}}>
              <CheckBox style={{flex:1}} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')}/>} checkedIcon={<Image source={require('./assets/checkedIcon.png')}/>} title='Esquerda' checked={checked1} onPress={()=>(set1(true),set2(false),set3(false),setAlinhamento(0))}/>
              <CheckBox style={{flex:1}} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')}/>} checkedIcon={<Image source={require('./assets/checkedIcon.png')}/>} title='Centro' checked={checked2} onPress={()=>(set1(false),set2(true),set3(false),setAlinhamento(1))}/>
              <CheckBox style={{flex:1}} uncheckedIcon={<Image source={require('./assets/uncheckedIcon.png')}/>} checkedIcon={<Image source={require('./assets/checkedIcon.png')}/>} title='Direita' checked={checked3} onPress={()=>(set1(false),set2(false),set3(true),setAlinhamento(2))}/>
            </View>
          </View>
    
          <View style={styles.v2}>
            <TouchableOpacity onPress={printQRCode}>
                <Text style={styles.texto}>Imprime</Text>
            </TouchableOpacity>
          </View>
        </View> 
      );
}
    
    const styles = StyleSheet.create({
        texto:{
          backgroundColor:'blue',
          color:'white',
          padding:'2%',
          textAlign:'center'
        },
        v1:{ 
            flex:1,
            alignItems:'center',
            flexDirection:'row',
            padding:'1%'
        },
        v2:{
          flex:2,
          alignItems:'center',
          marginTop:'2%',
          flexDirection:'row'
        },
        V:{
          height:Dimensions.get('window').height,
          width:Dimensions.get('window').width,
          backgroundColor:'lightgrey',
          padding:'10%',
          flexDirection:'column',
          alignSelf:'center',
          alignItems:'center'
        },
        Page: {

        }
      })