
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 
const Wallet = () => {
  return (
   <View style={styles.container}>
    <Text>
        wallet!
    </Text>
   </View>
  );
}
export default Wallet;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
        alignItems: 'center',
        justifyContent: 'center',
      },
});
