
import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';



 
const User = () => {
  const navigation = useNavigation(); 

 
  const handleWallet = () => {
   
    navigation.navigate('Wallet');
  };
  const handleHistory = () => {
   
    navigation.navigate('History');
  };
  const handleDiscount = () => {
   
    navigation.navigate('Discount');
  };

  const handleMap = () => {
   
    navigation.navigate('Map');
  };
  const handleLang = () => {
   
    navigation.navigate('Language');
  };
  const handleInvite = () => {
   
    navigation.navigate('Invite');
  };
  const handleService = () => {
   
    navigation.navigate('Service');
  };
  const handleSetting = () => {
   
    navigation.navigate('Setting');
  };
  const handleLogout = () => {
   
    navigation.navigate('Logout');
  };






  return (
    <View style={styles.container}>
    <TouchableOpacity
 style={[styles.button, styles.Discount_card_Button]}
 onPress={handleDiscount}
 >
   <Image
 style={[styles.image, styles.Discount_card_Image]}
 source={require('./assents/labels.png')}
/>
 <Text style={styles.buttonText}>ບັດສ່ວນຫຼຸດ</Text>
</TouchableOpacity>

<TouchableOpacity
 style={[styles.button_wallet, styles.wallet_Button]}
 onPress={handleWallet}
 >
 
 
   <Image
 style={[styles.image_wallet, styles.walletImage]}
 source={require('./assents/wallet.png')}
/>
 <Text style={styles.buttonText_wallet}>ກະເປົາຂອງທ່ານ</Text>
</TouchableOpacity>


<TouchableOpacity
 style={[styles.button_history, styles.history_Button]}
 onPress={handleHistory}
>
 
   <Image
 style={[styles.image_history, styles.history_Image]}
 source={require('./assents/history.jpeg')}
/>
 <Text style={styles.buttonText_history}>ປະຫວັດການສັ່ງຊື້</Text>
 <MaterialIcons name="navigate-next" size={40} color="black" style={styles.nextIcon1} />
</TouchableOpacity>

<TouchableOpacity
 style={[styles.button_Map, styles.Map_Button]}
 onPress={handleMap}
>
 
   <Image
 style={[styles.image_Map, styles.Map_Image]}
 source={require('./assents/Map.jpeg')}
/>
 <Text style={styles.buttonText_Map}>ທີ່ຢູ່</Text>
 <MaterialIcons name="navigate-next" size={40} color="black" style={styles.nextIcon2} />
</TouchableOpacity>

<TouchableOpacity
 style={[styles.button_lang, styles.lang_Button]}
 onPress={handleLang}
>
 
   <Image
 style={[styles.image_lang, styles.lang_Image]}
 source={require('./assents/language.jpeg')}
/>
 <Text style={styles.buttonText_lang}>ເລືອກພາສາ</Text>
 <MaterialIcons name="navigate-next" size={40} color="black" style={styles.nextIcon3} />
</TouchableOpacity>

<TouchableOpacity
 style={[styles.button_mes, styles.mes_Button]}
 onPress={handleInvite}
>
 
   <Image
 style={[styles.image_mes, styles.mes_Image]}
 source={require('./assents/message.jpeg')}
/>
 <Text style={styles.buttonText_mes}>ຊ່ວນໝູ່</Text>
 <MaterialIcons name="navigate-next" size={40} color="black" style={styles.nextIcon4} />
</TouchableOpacity>

<TouchableOpacity
 style={[styles.button_service, styles.service_Button]}
 onPress={handleService}
>
 
   <Image
 style={[styles.image_service, styles.service_Image]}
 source={require('./assents/service.jpeg')}
/>
 <Text style={styles.buttonText_service}>ສູນບໍລິການລູກຄ້າ</Text>
 <MaterialIcons name="navigate-next" size={40} color="black" style={styles.nextIcon5} />
</TouchableOpacity>

<TouchableOpacity
 style={[styles.button_setting, styles.setting_Button]}
 onPress={handleSetting}
>
 
   <Image
 style={[styles.image_setting, styles.setting_Image]}
 source={require('./assents/setting.jpeg')}
/>
 <Text style={styles.buttonText_setting}>ການຕັ້ງຄ່າ</Text>
 <MaterialIcons name="navigate-next" size={40} color="black" style={styles.nextIcon6} />
</TouchableOpacity>

 <TouchableOpacity 
  style={[styles.button_logout, styles.logout_Button]}
  onPress={handleLogout}
 >
    <Text style={styles.buttonText_logout}>ອອກຈາກລະບົບ</Text>
 </TouchableOpacity>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
imageContainer: {
  alignItems: 'center',
  
},
//button Discount
button: {
right:103,
width:143,
borderRadius: 10,
bottom:90,

},
Discount_card_Button: {
backgroundColor: '#fff',
height:50,
shadowColor: "#000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.4,
shadowRadius: 4,
elevation: 5,
},
buttonText: {
color: 'black',
fontSize:20,
textAlign: 'center',
fontWeight:'bold',
right:21,
bottom:48,
},
//image Discount

image: {
borderWidth: 6,
borderRadius: 10,
height: 50,
width: 50,
margin: 5,
left:90,
bottom:5,
},

//button wallet
button_wallet: {
left:74,
paddingHorizontal: 30,
borderRadius: 10,
bottom:140,

},
wallet_Button: {
backgroundColor: '#fff',
height:50,
shadowColor: "#000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.4,
shadowRadius: 4,
elevation: 5,
},
buttonText_wallet: {
color: 'black',
fontSize:20,
textAlign: 'center',
fontWeight:'bold',
right:28,
bottom:48,
},
//image wallet

image_wallet: {
borderWidth: 6,
borderRadius: 10,
height: 50,
width: 50,
margin: 5,
left:105,
bottom:5,
},


//button history
button_history: {
right:2,
paddingHorizontal: 40,
borderRadius: 10,
bottom:120,

},
history_Button: {
backgroundColor: '#fff',
height:50,
width:345,
shadowColor: "#000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.4,
shadowRadius: 4,
elevation: 5,
},
buttonText_history: {
color: 'black',
fontSize: 20,
textAlign: 'center',
fontWeight:'bold',
right:34,
bottom:45,
},
//img history
image_history: {
borderWidth: 6,
borderRadius: 10,
height: 45,
width: 50,
margin: 5,
right:40,
bottom:3,
},
history_Image: {

shadowColor: "#000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.4,
shadowRadius: 4,
elevation: 5,
},
// icon history
nextIcon1:{
  bottom:78,
  left:270,
},

//button map
button_Map: {
right:2,
paddingHorizontal: 40,
borderRadius: 10,
bottom: 110,

},
Map_Button: {
backgroundColor: '#fff',
height:50,
width:345,
shadowColor: "#000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.4,
shadowRadius: 4,
elevation: 5,
},
buttonText_Map: {
color: 'black',
fontSize: 20,
textAlign: 'center',
fontWeight:'bold',
right:85,
bottom:43,
},
//img map
image_Map: {
borderWidth: 6,
borderRadius: 10,
height: 45,
width: 50,
margin: 5,
right:40,
bottom:3,
},
Map_Image: {

shadowColor: "#000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.4,
shadowRadius: 4,
elevation: 5,
},
// icon map
nextIcon2:{
  bottom:78,
  left:270,
},

//button language
button_lang: {
right:2,
paddingHorizontal: 40,
borderRadius: 10,
bottom: 100,

},
lang_Button: {
backgroundColor: '#fff',
height:50,
width:345,
shadowColor: "#000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.4,
shadowRadius: 4,
elevation: 5,
},
buttonText_lang: {
color: 'black',
fontSize: 20,
textAlign: 'center',
fontWeight:'bold',
right:55,
bottom:45,
},
//img language
image_lang: {
borderWidth: 6,
borderRadius: 10,
height: 45,
width: 50,
margin: 5,
right:40,
bottom:3,
},
lang_Image: {

shadowColor: "#000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.4,
shadowRadius: 4,
elevation: 5,
},
// icon language
nextIcon3:{
  bottom:78,
  left:270,
},

//button mes
button_mes: {
right:2,
paddingHorizontal: 40,
borderRadius: 10,
bottom: 90,

},
mes_Button: {
backgroundColor: '#fff',
height:50,
width:345,
shadowColor: "#000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.4,
shadowRadius: 4,
elevation: 5,
},
buttonText_mes: {
color: 'black',
fontSize: 20,
textAlign: 'center',
fontWeight:'bold',
right:70,
bottom:43,
},
//img mes
image_mes: {
borderWidth: 6,
borderRadius: 10,
height: 45,
width: 50,
margin: 5,
right:40,
bottom:3,
},
mes_Image: {

shadowColor: "#000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.4,
shadowRadius: 4,
elevation: 5,
},
// icon mes
nextIcon4:{
  bottom:78,
  left:270,
},

//button service
button_service: {
right:2,
paddingHorizontal: 40,
borderRadius: 10,
bottom: 80,

},
service_Button: {
backgroundColor: '#fff',
height:50,
width:345,
shadowColor: "#000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.4,
shadowRadius: 4,
elevation: 5,
},
buttonText_service: {
color: 'black',
fontSize: 20,
textAlign: 'center',
fontWeight:'bold',
right:30,
bottom:35,
},
//img service
image_service: {
borderWidth: 6,
borderRadius: 10,
height: 45,
width: 45,
right:38,
top:2,
},
service_Image: {

shadowColor: "#000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.4,
shadowRadius: 4,
elevation: 5,
},
// icon service
nextIcon5:{
  bottom:78,
  left:270,
},

//button setting
button_setting: {
right:2,
paddingHorizontal: 40,
borderRadius: 10,
bottom: 70,

},
setting_Button: {
backgroundColor: '#fff',
height:50,
width:345,
shadowColor: "#000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.4,
shadowRadius: 4,
elevation: 5,
},
buttonText_setting: {
color: 'black',
fontSize: 20,
textAlign: 'center',
fontWeight:'bold',
right:60,
bottom:30,
},
//img setting
image_setting: {
borderWidth: 6,
borderRadius: 10,
height: 40,
width: 40,
right:30,
top:6,
},
setting_Image: {

shadowColor: "#000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.4,
shadowRadius: 4,
elevation: 5,
},
// icon setting
nextIcon6:{
  bottom:58,
  left:270,
},
logout_Button:{
right:2,
paddingHorizontal: 40,
borderRadius: 20,
bottom: 50,
},
button_logout:{
backgroundColor: '#f77788',
height:55,
width:240,
shadowColor: "#000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.4,
shadowRadius: 4,
elevation: 5,
},
buttonText_logout:{
justifyContent:'center',
color: 'black',
fontSize: 20,
textAlign: 'center',
fontWeight:'bold',
top:13,

},

});
export default User;