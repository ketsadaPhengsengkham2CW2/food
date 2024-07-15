
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

 
const Shop = () => {
  return (
    <View style={styles.container}>
    <View style={styles.imageContainer}>
    <Image
  style={[styles.image, styles.personImage]}
  source={require('./assents/person_cart.png')}
/>
 <Text style={styles.text}>ທ່ານຍັງບໍ່ທັນໄດ້ເພີ່ມຫຍັງເຂົ້າໃນກະຕ່າ</Text>
    </View>
     
   
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor:'#fafafa',
},
//image
imageContainer: {
    alignItems: 'center',
    marginBottom:162,
   
  },
  image: {
    borderWidth: 10,
    borderRadius:300,
    height: 350,
    width: 350,
    margin: 5,
   
  },
  personImage: {
    borderColor: '#CCD1D1',
   
  },
text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 22, // Adjust the font size as needed
    fontWeight: 'bold', // Adjust the font weight as needed
}

});
export default Shop;