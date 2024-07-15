import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { useNavigation } from "@react-navigation/native";

const Logout = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleRegister = () => {
    navigation.navigate("Register");
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
        <Text style={styles.buttonText_wel}>ຍິນດີຕ້ອນຮັບສູ່</Text>
        <Text style={styles.buttonText_fast}>F A S T</Text>
        <Text style={styles.buttonText_del}>D E L I V E R Y</Text>
        <Text style={styles.buttonText_food}>F O O D</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button_login, styles.login_Button]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText_login}>ເຂົ້າສູ່ລະບົບ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button_regist, styles.regist_Button]}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText_regist}>ສະໝັກສະມາຊິກ</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={[styles.image_2, styles._Image]}
          source={require("./assents/picture(1).jpeg")}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Logout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image_1: {
    top: 280,
    transform: [{ rotate: "215.71deg" }],
    height: 740,
    width: 823.56,
    left: 109,
  },
  image_2: {
    bottom: 200,
    height: 654.51,
    width: 450,
    right: -1,
    transform: [{ rotate: "270.71deg" }],
  },
  //login
  login_Button: {
    right: 100,

    borderRadius: 15,
    bottom: 50,
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
  //regist
  regist_Button: {
    left: 100,

    borderRadius: 15,
    bottom: 104,
  },
  button_regist: {
    backgroundColor: "#c535fc",
    height: 55,
    width: 170,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText_regist: {
    justifyContent: "center",
    color: "#f5f5f5",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    top: 13,
  },
  //wellcome
  buttonText_wel: {
    justifyContent: "center",
    color: "#FFFFFF",
    fontSize: 54,
    textAlign: "center",
    fontWeight: "bold",
    textShadowColor: "#ff2ea1", // stroke color
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    bottom: 105,
  },
  //fast
  buttonText_fast: {
    justifyContent: "center",
    color: "#B21FEB",
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
    bottom: 75,
  },
  //delivery
  buttonText_del: {
    justifyContent: "center",
    color: "#B21FEB",
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
    bottom: 65,
  },
  //food
  buttonText_food: {
    justifyContent: "center",
    color: "#B21FEB",
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
    bottom: 55,
  },
});
