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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleOTP_screen = () => {

    navigation.navigate('OTP_screen');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={[styles.image_1, styles._Image]}
          source={require("./assents/picture(2).jpeg")}
        />
      </TouchableOpacity>

      <Text style={styles.text_input2}>ເບີໂທລະສັບ</Text>
      <TextInput
        style={[styles.input_num, styles.shadow]}
        placeholder="ເບີໂທລະສັບ"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />
      <MaterialIcons name="phone-iphone" size={36} style={styles.numIcon} />

      <Text style={styles.text_input3}>ລະຫັດຜ່ານ</Text>
      <TextInput
        style={[styles.input_pwd, styles.shadow]}
        placeholder="ລະຫັດຜ່ານ"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Ionicons name="key-outline" size={34} style={styles.keyIcon} />

      <TouchableOpacity>
        <Image
          style={[styles.image_car, styles._Image]}
          source={require("./assents/car1-transformed.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.Text_forgot}>ລືມລະຫັດຜ່ານ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button_login, styles.login_Button]}
        onPress={handleOTP_screen}
      >
        <Text style={styles.buttonText_login}>ເຂົ້າສູ່ລະບົບ</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={[styles.image_face, styles._Image]}
          source={require("./assents/facebook.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={[styles.image_google, styles._Image]}
          source={require("./assents/search.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image_1: {
    top: 5,
    transform: [{ rotate: "230.71deg" }],
    height: 800,
    width: 800,
    left: 180,
  },
  image_car: {
    width: 200,
    height: 200,
    bottom: 575,
  },

  //input_num
  input_num: {
    fontSize: 20,
    fontWeight: "bold",
    bottom: 130,
    height: 45,
    width: 350,
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 50,
    marginVertical: 5,
    backgroundColor: "#fff",
  },
  //input_pwd
  input_pwd: {
    fontSize: 20,
    fontWeight: "bold",
    bottom: 165,
    height: 45,
    width: 350,
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 50,
    marginVertical: 5,
    backgroundColor: "#fff",
  },

  text_input2: {
    right: 100,
    bottom: 130,
    fontSize: 20,
    fontWeight: "bold",
  },
  text_input3: {
    bottom: 165,
    right: 100,
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
  //Login
  login_Button: {
    borderRadius: 15,
    bottom: 380,
  },
  button_login: {
    backgroundColor: "#c535fc",
    height: 55,
    width: 170,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText_login: {
    justifyContent: "center",
    color: "#f5f5f5",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    top: 13,
  },

  //num_Icon
  numIcon: {
    bottom: 176,
    right: 145,
    color: "#b3b5b4",
  },
  //key_Icon
  keyIcon: {
    bottom: 210,
    right: 150,
    color: "#b3b5b4",
  },
  image_face: {
    width: 50,
    height: 50,
    bottom: 350,
    right: 50,
  },
  image_google: {
    width: 50,
    height: 50,
    bottom: 400,
    left: 50,
  },
  //text_forgot
  Text_forgot: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontSize: 24,
    bottom: 396,
    left:80,
  },
});
