
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 
const Service = () => {
  return (
   <View style={styles.container}>
    <Text>
       Service!
    </Text>
   </View>
  );
}
export default Service;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});
