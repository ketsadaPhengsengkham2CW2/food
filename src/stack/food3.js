import React, { useRef } from "react";
import { StyleSheet,
   Text,
    View,
     Image,
     TouchableOpacity,
     Animated,
     ScrollView,
    
     } from 'react-native';
     import { useNavigation } from '@react-navigation/native';
const Food3 = () => {

  const navigation = useNavigation(); 
  const handleFood7 = () => {
   
    navigation.navigate('Food7');
  };
  return (
    <TouchableOpacity
     style={[
           styles.button_container_tom_yum, 
           styles.tom_yum_Button
       ]}
       onPress={handleFood7}
   >
     <Image
       style={[styles.image_tom_yum, styles.tom_yum_Image]}
       source={require("./assents/tom_yum_koung.jpeg")}
     />
     <Text style={styles.text_tom_yum_discount}>ສ່ວນຫລຸດ 5%</Text>
     <Text style={styles.text_tom_yum}>ຕົ້ມຍຳກຸ້ງ</Text>
     <Text style={styles.text_tom_yum_price}>35,000 ₭ </Text>
     <Text style={styles.text_tom_yum_delivery}>7,500 ₭ / Km </Text>
     <Text style={styles.text_tom_yum_free}>
       ຈັດສົ່ງຟຣີສຳລັບສັ່ງຊື້ 130,000 ₭ ຂຶ້ນໄປ{" "}
     </Text>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

       //image
  imageContainer: {
    alignItems: "center",
  },

    // img tom yum
  image_tom_yum: {
    borderRadius: 15,
    height: 250,
    width: 370,
    bottom: 5,
  },
 
  // text button tom yum
  text_tom_yum_discount: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width: 160,
    bottom: 240,
    left: 1,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  text_tom_yum: {
    fontSize: 24,
    fontWeight: "bold",
    left: 15,
    bottom: 32,
  },
  text_tom_yum_price: {
    fontSize: 20,
    color: "#DC7633",
    left: 160,
    bottom: 60,
  },
  text_tom_yum_delivery: {
    fontSize: 16,
    color: "#828383",
    left: 27,
    bottom: 53,
  },
  text_tom_yum_free: {
    fontSize: 15,
    color: "#DC7633",
    left: 130,
    bottom: 74,
  },
    //button tom yum
    button_container_tom_yum: {
        borderRadius: 20,
        top: 165,
        left:5,
      },
      tom_yum_Button: {
        backgroundColor: "#fff",
        height: 320,
        width: 370,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        
      },

});
export default Food3;