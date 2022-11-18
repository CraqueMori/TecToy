import {View,Text,StyleSheet,TouchableOpacity, Image} from 'react-native';
import { Dimensions } from 'react-native'

export default function TelaInicial({navigation}){
  return(
      <View style={styles.ViewMaster}>

        <View style={styles.View1}>
        <TouchableOpacity
          style={styles.button1}
          onPress={()=> navigation.navigate('QRcode')}>
          <Image style={styles.Image} source={require('./assets/function_qr.png')}/>
          <Text style={styles.Text}>QRCode print</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.View2}>
        <TouchableOpacity
          style={styles.button2}
          onPress={()=> navigation.navigate('BarCode')}>
          <Image style={styles.Image} source={require('./assets/function_barcode.png')}/>
          <Text style={styles.Text}>BarCode print</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.View3}>
        <TouchableOpacity
          style={styles.button3}
          onPress={()=> navigation.navigate('Text')}>
          <Image style={styles.Image} source={require('./assets/function_text.png')}/>
          <Text style={styles.Text}>Text print</Text>
        </TouchableOpacity>
        </View>

      </View>
    );
}

const styles = StyleSheet.create({

    ViewMaster:{
      backgroundColor:'#1a1b1c',
      height:Dimensions.get('window').height,
      width:Dimensions.get('window').width,
      flexDirection:"row",
      flexWrap:"nowrap",
      direction:"ltr",
      alignSelf:"auto",
      position:"relative",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      alignContent:"stretch",
      backgroundColor: "black"
    },
    View1: {
      flexDirection:"column",
      flexWrap:"nowrap",
      direction:"ltr",
      flexBasis:"auto",
      flexGrow:0,
      alignSelf:"auto",
      position:"relative",
      flexShrink:1,
    },
    View2: {
      flexDirection:"column-reverse",
      flexWrap:"nowrap",
      direction:"ltr",
      flexBasis:"auto",
      flexGrow:0,
      alignSelf:"auto",
      position:"relative",
      flexShrink:1,
    },
    View3: {
      flexDirection:"column-reverse",
      flexWrap:"nowrap",
      direction:"ltr",
      flexBasis:"auto",
      flexGrow:0,
      alignSelf:"auto",
      position:"relative",
      flexShrink:1,
    },    
    button1 : {
      top:"1%",
      backgroundColor: '#04142e',
      margin:'3%',
      left:"4%",
      borderRadius: 2,
      paddingVertical: '2%',
      paddingHorizontal: '2%',
      width:160,
      height:140,
    },    
    button2 : {
      backgroundColor: '#04142e',
      bottom:"1%",
      margin:'3%',
      left:"50%",
      borderRadius: 2,
      paddingVertical: '2%',
      paddingHorizontal: '2%',
      width:160,
      height:140,
    },    
    button3 : {
      backgroundColor: '#04142e',
      left:"-220%",
      right:"0%",
      bottom:"24%",
      borderRadius: 2,
      paddingVertical: '2%',
      paddingHorizontal: '2%',
      width:160,
      height:140,
    },
    Image: {
      alignSelf:"center"
    },
    Text: {
      textAlign: "center",
      color:"silver"
    }
});
  