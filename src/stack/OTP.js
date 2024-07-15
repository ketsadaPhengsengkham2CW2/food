import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const OTP_screen = () => {
  const [number, setNumber] = useState("");

  const navigation = useNavigation();

  const handleHome = () => {

    navigation.navigate('Home');
  };

  return (
   <View style={styles.container}>
    <TouchableOpacity>
        <Image
          style={[styles.image_1, styles._Image]}
          source={require("./assents/picture(2).jpeg")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={[styles.image_car, styles._Image]}
          source={require("./assents/car1-transformed.png")}
        />
      </TouchableOpacity>

      <Text style={styles.text_input_sms}>ກະລຸນາໃສ່ລະຫັດທີ່ທ່ານໄດ້ຈາກ SMS </Text>
      <TextInput
        style={[styles.input_otp, styles.shadow]}
        placeholder=" ໃສ່ລະຫັດ OTP 6 ໂຕເລກ"
         placeholderTextColor="#c4c2c2"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

<TouchableOpacity
        style={[styles.button_next, styles.next_Button]}
        onPress={handleHome }
      >
        <Text style={styles.buttonText_next}>ຕໍ່ໄປ</Text>
      </TouchableOpacity>
   </View>
  );
}
export default OTP_screen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image_1: {
        bottom: 105,
        transform: [{ rotate: "230.71deg" }],
        height: 800,
        width: 800,
        left: 180,
      },
      image_car: {
        width: 200,
        height: 200,
        bottom: 425,
      },
    
      //input_otp
      input_otp: {
        fontSize: 20,
        fontWeight: "bold",
        color:'green',
        bottom: 390,
        height: 45,
        width: 350,
        borderRadius: 20,
        borderColor: "gray",
        borderWidth: 1,
        paddingHorizontal: 50,
        marginVertical: 5,
        backgroundColor: "#fff",
        textAlign:'center',
      },
      text_input_sms: {
        
        bottom: 400,
        fontSize: 20,
        fontWeight: "bold",
      },
      shadow: {
        // Shadow for iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Elevation for Android
        elevation: 5,
      },
      //next
  next_Button: {
    borderRadius: 15,
    bottom: 360,
  },
  button_next: {
    backgroundColor: "#c535fc",
    height: 55,
    width: 170,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText_next: {
    justifyContent: "center",
    color: "#f5f5f5",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    top: 13,
  },

});
