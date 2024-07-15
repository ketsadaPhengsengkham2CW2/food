
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 
const Discount = () => {
  return (
   <View style={styles.container}>
    <Text>
        Discount!
    </Text>
   </View>
  );
}
export default Discount;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});
