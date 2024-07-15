
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
 
const Home = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const opacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const navigation = useNavigation(); 

 
  const handleFood1 = () => {
   
    navigation.navigate('Food1');
  };
  const handleFood2 = () => {
   
    navigation.navigate('Food2');
  };
  const handleFood3 = () => {
   
    navigation.navigate('Food3');
  };
  const handleFood4 = () => {
   
    navigation.navigate('Food4');
  };
  const handleFood5 = () => {
   
    navigation.navigate('Food5');
  };
  const handleFood6 = () => {
   
    navigation.navigate('Food6');
  };
  const handleFood7 = () => {
   
    navigation.navigate('Food7');
  };
  const handleFood8 = () => {
   
    navigation.navigate('Food8');
  };







  return (
     <View style={styles.container}>
    <Animated.ScrollView 
        horizontal={true} 
        contentContainerStyle={styles.scrollViewRight}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
    >
        <TouchableOpacity
     style={[
           styles.button_container_larp, 
           styles.larp_Button
       ]}
       onPress={handleFood1}
   >
     <Image
       style={[styles.image_larp, styles.larp_Image]}
       source={require("./assents/larp.jpeg")}
     />
     <Text style={styles.text_larp}>ອາຫານສຸດຮິດ</Text>
     
   </TouchableOpacity>
   
    <TouchableOpacity
     style={[
           styles.button_container_food1, 
           styles.food1_Button
       ]}
       onPress={handleFood2}
   >
     <Image
       style={[styles.image_food1, styles.food1_Image]}
       source={require("./assents/food1.jpeg")}
     />
     <Text style={styles.text_food1}>ແຊບສຸດຄຸ້ມ</Text>
     <Text style={styles.text_food1_two}>ຫຼຸດສູງສຸດ</Text>
     <Text style={styles.text_food1_three}>50%</Text>
     
   </TouchableOpacity>

   <TouchableOpacity
     style={[
           styles.button_container_food2, 
           styles.food2_Button
       ]}
       onPress={handleFood3}
   >
     <Image
       style={[styles.image_food2, styles.food2_Image]}
       source={require("./assents/food2.jpeg")}
     />
     <Text style={styles.text_food2}>ລວມນ້ອງໃໝ່</Text>
     <Text style={styles.text_food2_two}>ມາແຮງຕອນນີ້</Text>

   </TouchableOpacity>
  
   <TouchableOpacity
     style={[
           styles.button_container_food_set, 
           styles.food_set_Button
       ]}
       onPress={handleFood4}
   >
     <Image
       style={[styles.image_food_set, styles.food_set_Image]}
       source={require("./assents/food_set.jpeg")}
     />
     <Text style={styles.text_food_set}>ອາຫານຈານເດັດ</Text>
     <Text style={styles.text_food_set_two}>ທີ່ຕ້ອງສັ່ງໃຫ້ໄດ້</Text>

   </TouchableOpacity>

    </Animated.ScrollView>

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
    backgroundColor: "#fff",
  },
  scrollView: {
    alignItems: "center",
    
    height: 1500,
   
  },
  scrollViewRight: {
    alignItems: "center",
    paddingTop: 180,
    height: 0,
    width:480,
    
  },
  //button koy
  button_container_koy_pa: {
    borderRadius: 20,
    top: 25,
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
    top: 40,
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
        top: 55,
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

       //button bamboo
  button_container_baboo: {
    borderRadius: 20,
    top: 70,
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
  //text larp
  text_larp: {
   
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width: 100,
    bottom: 115,
    
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  // img larp
  image_larp: {
    justifyContent: "center",
    borderRadius: 10,
    height: 123,
    width: 108,
    bottom: 5,
  },
  //button larp
  button_container_larp: {
    borderRadius: 10,
    bottom: 110,
    left:5,
  },
  larp_Button: {
    backgroundColor: "#fff",
    height: 100,
    width: 108,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  //text food1
  text_food1: {
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width:80,
    bottom: 115,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  text_food1_two: {
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width: 70,
    bottom: 110,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  text_food1_three: {
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width: 35,
    bottom: 105,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  // img food1
  image_food1: {
    justifyContent: "center",
    borderRadius: 10,
    height: 123,
    width: 108,
    bottom: 5,
  },
  //button food1
  button_container_food1: {
    borderRadius: 10,
    bottom: 110,
    left:15,
  },
  food1_Button: {
    backgroundColor: "#fff",
    height: 100,
    width: 108,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },

  //text food2
  text_food2: {
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width:90,
    bottom: 115,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  text_food2_two: {
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width: 100,
    bottom: 112,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  
  // img food2
  image_food2: {
    justifyContent: "center",
    borderRadius: 10,
    height: 123,
    width: 108,
    bottom: 5,
  },
  //button food2
  button_container_food2: {
    borderRadius: 10,
    bottom: 110,
    left:25,
  },
  food2_Button: {
    backgroundColor: "#fff",
    height: 100,
    width: 108,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },

  //text food2
  text_food_set: {
    justifyContent: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width:107,
    bottom: 115,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  text_food_set_two: {
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width: 100,
    bottom: 112,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  
  // img food2
  image_food_set: {
    justifyContent: "center",
    borderRadius: 10,
    height: 123,
    width: 108,
    bottom: 5,
  },
  //button food2
  button_container_food_set: {
    borderRadius: 10,
    bottom: 110,
    left:35,
  },
  food_set_Button: {
    backgroundColor: "#fff",
    height: 100,
    width: 108,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },

});
export default Home;