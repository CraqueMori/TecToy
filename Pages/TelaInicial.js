import {View,Text,StyleSheet,TouchableOpacity, Image} from 'react-native';


export default function TelaInicial({navigation}){
  return(
      <View style={{
        backgroundColor:'black',
        alignSelf:'center',
        padding:'8%'
       }}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> navigation.navigate('QRcode')}>
          <Image style={styles.Image} source={require('./assets/QR-Code-82.png')}/>
          <Text style={styles.Text}>QRCode print</Text>
          
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> navigation.navigate('BarCode')}>
          <Image style={styles.Image} source={require('./assets/Barcode-82.png')}/>
          <Text style={styles.Text}>BarCode print</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> navigation.navigate('Text')}>
          <Image style={styles.Image} source={require('./assets/Write.png')}/>
          <Text style={styles.Text}>Text print</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    button : {
      backgroundColor: 'darkgrey',
      margin:'3%',
      borderRadius: 2,
      paddingVertical: '2%',
      paddingHorizontal: '2%',
      width:200,
      height:120
    },
    Image: {
      alignSelf:"center"
    },
    Text: {
      textAlign: "center"
    }
});
  