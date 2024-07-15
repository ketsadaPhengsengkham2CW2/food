
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 
const Invite = () => {
  return (
   <View style={styles.container}>
    <Text>
       Invite!
    </Text>
   </View>
  );
}
export default Invite;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});
