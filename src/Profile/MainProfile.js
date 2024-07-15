import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Zocial from "react-native-vector-icons/Zocial";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


import { useNavigation } from "@react-navigation/native";

const MainProfile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button_profile, styles.profile_button]}
      >
         <EvilIcons name="user" size={200} color="black" style={styles.profileIcon} />
         <TouchableOpacity
          style={[styles.button_icon]}
         >
         <MaterialIcons name="cameraswitch" size={40}  style={styles.cameraswitchIcon} />
         </TouchableOpacity>
         
      </TouchableOpacity>

      <TouchableOpacity
      style={[styles.button_user, styles.user_button]}
      >
           <FontAwesome5 name="user-edit" size={40} color="#DC7633" style={styles.user_editIcon} />
           <Text style={styles.text_user}>ຊື່ຜູ້ໃຊ້</Text>
           <Text style={styles.text_nameuser}>ທ້າວ ເກດສະດາ</Text>
           <FontAwesome5 name="pencil-alt" size={30} color="#DC7633" style={styles.pencilIcon1} />

      </TouchableOpacity>

      <TouchableOpacity
      style={[styles.button_email, styles.email_button]}
      >
           <Zocial name="email" size={40} color="#DC7633" style={styles.emailIcon} />
           <Text style={styles.text_email}>ອີເມວ</Text>
           <Text style={styles.text_nameEmail}>cw2@gmail.com</Text>
           <FontAwesome5 name="pencil-alt" size={30} color="#DC7633" style={styles.pencilIcon2} />

      </TouchableOpacity>

      <TouchableOpacity
      style={[styles.button_num, styles.num_button]}
      >
           <Feather name="phone-call" size={40} color="#DC7633" style={styles.numIcon} />
           <Text style={styles.text_num}>ເບີໂທລະສັບ</Text>
           <Text style={styles.text_nameNum}>+856 209963360</Text>
           <FontAwesome5 name="pencil-alt" size={30} color="#DC7633" style={styles.pencilIcon3} />

      </TouchableOpacity>


      <Text style={styles.text}>ໄດ້ເຊື່ອມຕໍ່ກັບບັນຊີ</Text>


      <TouchableOpacity
       style={[styles.button_face, styles.face_button]}
      >
          <Image
          style={[styles.image_face, styles.face_Image]}
          source={require('./assents/facebook.png')}
          />
           <Text style={styles.text_face}>Facebook</Text>
           <Text style={styles.text_linkFace}>ເຊື່ອມຕໍ່</Text>
      </TouchableOpacity>

      <TouchableOpacity
       style={[styles.button_gg, styles.gg_button]}
      >
          <Image
          style={[styles.image_gg, styles.gg_Image]}
          source={require('./assents/search.png')}
          />
           <Text style={styles.text_gg}>Google</Text>
           <Text style={styles.text_linkgg}>ເຊື່ອມຕໍ່ແລ້ວ</Text>
           <MaterialCommunityIcons name="cancel" size={30} color="#DC7633" style={styles.pencilIcon4} />
      </TouchableOpacity>



    </View>
  );
};
export default MainProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    alignItems: "center",
    justifyContent: "center",
  },
  //button profile
  button_profile: {
    height:160,
    width: 340,
    borderRadius: 10,
    bottom:60,
  },
  profile_button: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  profileIcon:{
    alignItems:'center',
    justifyContent:'center',
    height:170,
    width:180,
    bottom:20,
    left:70,
  },
  cameraswitchIcon:{
      color:'black',
      top:5,
      left:4,
      borderRadius:20,
      width:50,
      height:50,
  },
  button_icon:{
      backgroundColor:'#83BF4F',
      bottom:64,
      left:185,
      borderRadius:25,
      width:50,
      height:50,
  },
  // user button
  button_user: {
    height:75,
    width: 340,
    borderRadius: 10,
    bottom: 45,
  },
  user_button: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  text_nameuser:{
      fontWeight:'medium',
      fontSize:20,
      left:90,
    bottom:35,
  },
  text_user:{
    fontWeight:'medium',
    fontSize:20,
    left:90,
    bottom:35,
  },
  user_editIcon:{
      top:15,
      left:15,
  },
  pencilIcon1:{
      left:280,
      bottom:75,
  },
  // email button
  button_email: {
    height:75,
    width: 340,
    borderRadius: 10,
    bottom: 30,
  },
  email_button: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  text_nameEmail:{
      fontWeight:'medium',
      fontSize:20,
      left:90,
    bottom:35,
  },
  text_email:{
    fontWeight:'medium',
    fontSize:20,
    left:90,
    bottom:35,
  },
  emailIcon:{
      top:15,
      left:15,
  },
  pencilIcon2:{
      left:280,
      bottom:75,
  },

  // number button
  button_num: {
    height:75,
    width: 340,
    borderRadius: 10,
    bottom: 15,
  },
    num_button: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  text_nameNum:{
      fontWeight:'medium',
      fontSize:20,
      left:90,
    bottom:35,
  },
  text_num:{
    fontWeight:'medium',
    fontSize:20,
    left:90,
    bottom:35,
  },
  numIcon:{
      top:15,
      left:15,
  },
  pencilIcon3:{
      left:280,
      bottom:75,
  },
  //text
  text:{
    fontWeight:'bold',
    fontSize:20,
    top:10,
    right:85,
  },
  // facebook button
  button_face: {
    height:75,
    width: 340,
    borderRadius: 10,
    top: 25,
  },
    face_button: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  face_Image:{
    width:50,
    height:50,
    top:14,
    left:10,
  },
  text_face:{
    fontWeight:'medium',
    fontSize:20,
    left:75,
  bottom:25,
},
text_linkFace:{
  fontWeight:'medium',
  fontSize:20,
  left:260,
  bottom:50,
  color:"#DC7633",
},
  // Google button
  button_gg : {
    height:75,
    width: 340,
    borderRadius: 10,
    top: 40,
  },
    gg_button: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  gg_Image:{
    width:50,
    height:50,
    top:14,
    left:10,
  },
  text_gg:{
    fontWeight:'medium',
    fontSize:20,
    left:75,
  bottom:35,
},
text_linkgg:{
  fontWeight:'medium',
  fontSize:20,
  left:75,
  bottom:35,
  color:"#DC7633",
},
pencilIcon4:{
  left:280,
  bottom:75,
},
});
