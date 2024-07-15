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
 
const Food1 = () => {
  
  const scrollY = useRef(new Animated.Value(0)).current;

  const opacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const navigation = useNavigation(); 
  const handleFood5 = () => {
   
    navigation.navigate('Food5');
  };
  const handleFood6 = () => {
   
    navigation.navigate('Food6');
  };
  
  const handleFood8 = () => {
   
    navigation.navigate('Food8');
  };

  return (
   <View style={styles.container}>
    <Animated.ScrollView
   contentContainerStyle={styles.scrollView}
   onScroll={Animated.event(
     [{ nativeEvent: { contentOffset: { y: scrollY } } }],
     { useNativeDriver: true }
   )}
   scrollEventThrottle={46}
 >
   

    
   <TouchableOpacity
     style={[
           styles.button_container_koy_pa, 
           styles.koy_pa_Button
       ]}
       onPress={handleFood5}
   >
     <Image
       style={[styles.image, styles.koy_pa_Image]}
       source={require("./assents/koy_pa.jpeg")}
     />
     <Text style={styles.text_koy_discount}>ສ່ວນຫລຸດ 10%</Text>
     <Text style={styles.text_koy}>ກ້ອຍປາເຄິງ</Text>
     <Text style={styles.text_koy_price}>50,000 ₭ </Text>
     <Text style={styles.text_koy_delivery}>7,500 ₭ / Km </Text>
     <Text style={styles.text_koy_free}>
       ຈັດສົ່ງຟຣີສຳລັບສັ່ງຊື້ 130,000 ₭ ຂຶ້ນໄປ{" "}
     </Text>
   </TouchableOpacity>

   <TouchableOpacity
     style={[
       styles.button_container_papaya_salad,
       styles.papaya_salad_Button,
     ]}
     onPress={handleFood6}
   >
     <Image
       style={[styles.image_papaya, styles.papaya_salad_Image]}
       source={require("./assents/papaya_salad.jpeg")}
     />

     <Text style={styles.text_papaya_salad}>ຕຳໝາກຫຸ່ງແຊບໆ</Text>
     <Text style={styles.text_papaya_salad_price}>15,000 ₭ </Text>
     <Text style={styles.text_papaya_salad_delivery}>7,500 ₭ / Km </Text>
     <Text style={styles.text_papaya_salad_free}>
       ຈັດສົ່ງຟຣີສຳລັບສັ່ງຊື້ 130,000 ₭ ຂຶ້ນໄປ{" "}
     </Text>
   </TouchableOpacity>

   <TouchableOpacity
     style={[
       styles.button_container_baboo,
       styles.baboo_Button,
     ]}
     onPress={handleFood8}
   >
     <Image
       style={[styles.image_baboo, styles.baboo_Image]}
       source={require("./assents/baboo_soup.jpeg")}

     />

     <Text style={styles.text_baboo}>ແກງໜໍ່ໄມ້</Text>
     <Text style={styles.text_baboo_price}>25,000 ₭ </Text>
     <Text style={styles.text_baboo_delivery}>7,500 ₭ / Km </Text>
     <Text style={styles.text_baboo_free}>
       ຈັດສົ່ງຟຣີສຳລັບສັ່ງຊື້ 130,000 ₭ ຂຶ້ນໄປ{" "}
     </Text>
   </TouchableOpacity>

 </Animated.ScrollView>
   
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      scrollView: {
        alignItems: "center",
        
        height: 1170,
       
      },
       //button koy
  button_container_koy_pa: {
    borderRadius: 20,
    top: 165,
  },
  koy_pa_Button: {
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

  //image
  imageContainer: {
    alignItems: "center",
  },
  // img koy
  image: {
    borderRadius: 15,
    height: 250,
    width: 370,
    bottom: 5,
  },
  koy_pa_Image: {
    borderColor: "#828383",
  },
  // text button koy
  text_koy_discount: {
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
  text_koy: {
    fontSize: 24,
    fontWeight: "bold",
    left: 15,
    bottom: 32,
  },
  text_koy_price: {
    fontSize: 20,
    color: "#DC7633",
    left: 160,
    bottom: 60,
  },
  text_koy_delivery: {
    fontSize: 16,
    color: "#828383",
    left: 27,
    bottom: 53,
  },
  text_koy_free: {
    fontSize: 15,
    color: "#DC7633",
    left: 130,
    bottom: 74,
  },
  //button papaya salad
  button_container_papaya_salad: {
    borderRadius: 20,
    top: 180,
  },
  papaya_salad_Button: {
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
  //text papaya
  text_papaya_salad: {
    fontSize: 24,
    fontWeight: "bold",
    left: 15,
    bottom: 2,
  },
  text_papaya_salad_price: {
    fontSize: 20,
    color: "#DC7633",
    left: 220,
    bottom: 30,
  },
  text_papaya_salad_delivery: {
    fontSize: 16,
    color: "#828383",
    left: 27,
    bottom: 23,
  },
  text_papaya_salad_free: {
    fontSize: 15,
    color: "#DC7633",
    left: 130,
    bottom: 44,
  },
  // img papaya
  image_papaya: {
    borderRadius: 20,
    height: 250,
    width: 370,
    bottom: 5,
  },
  
       //button bamboo
  button_container_baboo: {
    borderRadius: 20,
    top: 195,
  },
  baboo_Button: {
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
  //text bamboo
  text_baboo: {
    fontSize: 24,
    fontWeight: "bold",
    left: 15,
    bottom: 2,
  },
  text_baboo_price: {
    fontSize: 20,
    color: "#DC7633",
    left: 150,
    bottom: 32,
  },
  text_baboo_delivery: {
    fontSize: 16,
    color: "#828383",
    left: 27,
    bottom: 23,
  },
  text_baboo_free: {
    fontSize: 15,
    color: "#DC7633",
    left: 130,
    bottom: 44,
  },
  // img bamboo
  image_baboo: {
    borderRadius: 20,
    height: 250,
    width: 370,
    bottom: 5,
  },
});
export default Food1;
