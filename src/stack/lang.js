
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 
const Lang = () => {
  return (
   <View style={styles.container}>
    <Text>
        language!
    </Text>
   </View>
  );
}
export default Lang;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});
