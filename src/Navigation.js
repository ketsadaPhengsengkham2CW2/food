import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text,Image, TouchableOpacity } from 'react-native';
import Home from './Screen/home';
import Shop from './Screen/shop';
import User from './Screen/user';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchBar } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Wallet from './stack/wallet';
import History from './stack/history';
import Discount from './stack/discount';
import Map from './stack/map';
import Lang from './stack/lang';
import Invite from './stack/invite';
import Service from './stack/service';
import Setting from './stack/setting';
import Logout from './stack/logout';

import Food1 from './stack/food1';
import Food2 from './stack/food2';
import Food3 from './stack/food3';
import Food4 from './stack/food4';
import Food5 from './stack/food5';
import Food6 from './stack/food6';
import Food7 from './stack/food7';
import Food8 from './stack/food8';
import MainProfile from './Profile/MainProfile';
import Login from './stack/login';
import Register from './stack/regist';
import OTP_screen from './stack/OTP';

//SearchBar
const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>ເມນູ</Text>
      <SearchBar
        placeholder="ຄົ້ນຫາ..."
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
      />
    </View>
  );
};


//ProfileHeader
const ProfileHeader = () => {
  const navigation = useNavigation(); 

 
const handleMainProfile = () => {
 
  navigation.navigate('MainProfile');
};
  return (
    <TouchableOpacity style={styles.profileContainer} onPress={handleMainProfile}>
    <View style={styles.textContainer}>
      <Text style={styles.textname}>ທ້າວ ເກດສະດາ</Text>
      <Text style={styles.textnumber}>+856 209****360</Text>
      <MaterialIcons name="navigate-next" size={50} color="black" style={styles.nextIcon} />
    </View>
    <EvilIcons name="user" size={125} color="#F39C12" style={styles.profileIcon} />
  </TouchableOpacity>
  );
};
// food1 header
const Food1Header = () => {
  const navigation = useNavigation(); 

 
  const handleHome = () => {
   
    navigation.navigate('Home');
  };
  return(
    <TouchableOpacity style={styles.Food1Container}>
       <Image
       style={[styles.image_larp, styles.larp_Image]}
       source={require("./Screen/assents/larp.jpeg")}
     />
      <Ionicons name="chevron-back" 
      size={50} 
      color="#B21FEB" 
      style={styles.backfood1Icon} 
      onPress={handleHome}
      />
     <Text style={styles.text_larp}>ອາຫານສຸດຮິດ</Text>
     
    </TouchableOpacity>
  );
};
// food2 header
const Food2Header = () => {
  const navigation = useNavigation(); 

 
  const handleHome = () => {
   
    navigation.navigate('Home');
  };
  return(
    <TouchableOpacity style={styles.Food2Container}>
       <Image
       style={[styles.Image_food1, styles.food1_Image]}
       source={require("./Screen/assents/food1.jpeg")}
     />
      <Ionicons name="chevron-back" 
      size={50} 
      color="#B21FEB" 
      style={styles.backfood2Icon} 
      onPress={handleHome}
      />
     <Text style={styles.text_1_food1}>ແຊບສຸດຄຸ້ມ</Text>
     <Text style={styles.text_2_food1}>ຫຼຸດສູງສຸດ</Text>
     <Text style={styles.text_3_food1}>50%</Text>

    </TouchableOpacity>
  );
};
// food3 header
const Food3Header = () => {
  const navigation = useNavigation(); 

 
  const handleHome = () => {
   
    navigation.navigate('Home');
  };
  return(
    <TouchableOpacity style={styles.Food3Container}>
       <Image
       style={[styles.Image_food2, styles.food2_Image]}
       source={require("./Screen/assents/food2.jpeg")}
     />
      <Ionicons name="chevron-back" 
      size={50} 
      color="#B21FEB" 
      style={styles.backfood3Icon} 
      onPress={handleHome}
      />
     <Text style={styles.text_1_food2}>ລວມນ້ອງໃໝ່</Text>
     <Text style={styles.text_2_food2}>ມາແຮງຕອນນີ້</Text>
    
    </TouchableOpacity>
  );
};
// food4 header
const Food4Header = () => {
  const navigation = useNavigation(); 

 
  const handleHome = () => {
   
    navigation.navigate('Home');
  };
  return(
    <TouchableOpacity style={styles.Food4Container}>
       <Image
       style={[styles.Image_food_set, styles.food_set_Image]}
       source={require("./Screen/assents/food_set.jpeg")}
     />
      <Ionicons name="chevron-back" 
      size={50} 
      color="#B21FEB" 
      style={styles.backfood4Icon} 
      onPress={handleHome}
      />
     <Text style={styles.text_1_food_set}>ອາຫານຈານເດັດ</Text>
     <Text style={styles.text_2_food_set}>ທີ່ຕ້ອງສັ່ງໃຫ້ໄດ້</Text>
    
    </TouchableOpacity>
  );
};
// MainProfile header
const MainProfileHeader = () => {
  const navigation = useNavigation(); 

 
  const handleUser = () => {
   
    navigation.navigate('User');
  };
  return(
    <View style={styles.MainProfileContainer}>
      
      <Text style={styles.text_mainprofile}>ໂປຣໄຟລ໌</Text> 
      <AntDesign name="back" 
      size={34} 
      color="#838383" 
      style={styles.backIcon} 
      onPress={handleUser}
      />
   
   
    </View>
    
  );
};







//AllStack
const AllStack = createNativeStackNavigator();
const AllStackScreen = () =>{
  <AllStack.Navigator>
    
  </AllStack.Navigator>
}
//User
const UserStack = createNativeStackNavigator();
const UserStackScreen = () => (
  <UserStack.Navigator  >
    <UserStack.Screen 
     name="User" 
     component={User} 
     options={{ header: () => <ProfileHeader /> }} 
    />
  </UserStack.Navigator>
);
//Home
const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () =>{
  <HomeStack.Navigator>
    <HomeStack.Screen name='Home' component={Home}/>
  </HomeStack.Navigator>
}
//Wallet
const WalletStack = createNativeStackNavigator();
const WalletStackScreen = () => (
  <WalletStack.Navigator>
    <WalletStack.Screen 
      name="Wallet" 
      component={Wallet} 
      options={{ 
        headerShown: true, 
        headerTitle: 'Wallet',
        headerTitleAlign: 'center',
      }} 
    />
  </WalletStack.Navigator>
);

//Discount
const DiscountStack = createNativeStackNavigator();
const DiscountStackScreen = () => (
  <DiscountStack.Navigator>
    <DiscountStack.Screen 
      name="Discount" 
      component={Discount} 
      options={{ 
        headerShown: true,
        headerTitle: 'Discount',
        headerTitleAlign: 'center',
      }} 
    />
  </DiscountStack.Navigator>
);
//History
const HistoryStack = createNativeStackNavigator();
const HistoryStackScreen = () => (
  <HistoryStack.Navigator>
    <HistoryStack.Screen 
      name="History" 
      component={History} 
      options={{ 
        headerShown: true, 
        headerTitle: 'History',
        headerTitleAlign: 'center',
      }} 
    />
  </HistoryStack.Navigator>
);
//Map
const MapStack = createNativeStackNavigator();
const MapStackScreen = () => (
  <MapStack.Navigator>
    <MapStack.Screen 
      name="Map" 
      component={Map} 
      options={{ 
        headerShown: true, 
        headerTitle: 'Map',
        headerTitleAlign: 'center',
      }} 
    />
  </MapStack.Navigator>
);
//Language
const InviteStack = createNativeStackNavigator();
const InviteStackScreen = () => (
  <InviteStack.Navigator>
    <InviteStack.Screen 
      name="Invite" 
      component={Invite} 
      options={{ 
        headerShown: true, 
        headerTitle: 'Invite',
        headerTitleAlign: 'center',
      }} 
    />
  </InviteStack.Navigator>
);
//Invite
const LangStack = createNativeStackNavigator();
const LangStackScreen = () => (
  <LangStack.Navigator>
    <LangStack.Screen 
      name="Language" 
      component={Lang} 
      options={{ 
        headerShown: true, 
        headerTitle: 'Language',
        headerTitleAlign: 'center',
      }} 
    />
  </LangStack.Navigator>
);
//Service
const ServiceStack = createNativeStackNavigator();
const ServiceStackScreen = () => (
  <ServiceStack.Navigator>
    <ServiceStack.Screen 
      name="Service" 
      component={Service} 
      options={{ 
        headerShown: true, 
        headerTitle: 'Service',
        headerTitleAlign: 'center',
      }} 
    />
  </ServiceStack.Navigator>
);
//Setting
const SettingStack = createNativeStackNavigator();
const SettingStackScreen = () => (
  <SettingStack.Navigator>
    <SettingStack.Screen 
      name="Setting" 
      component={Setting} 
      options={{ 
        headerShown: true, 
        headerTitle: 'Setting',
        headerTitleAlign: 'center',
      }} 
    />
  </SettingStack.Navigator>
);
//Logout
const LogoutStack = createNativeStackNavigator();
const LogoutStackScreen = () => (
  <LogoutStack.Navigator>
    <LogoutStack.Screen 
      name="Logout" 
      component={Logout} 
      options={{ 
        headerShown: false, 
        headerTitle: 'Logout',
        headerTitleAlign: 'center',
      }} 
    />
  </LogoutStack.Navigator>
);
//Login
const LoginStack = createNativeStackNavigator();
const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen 
      name="Logint" 
      component={Login} 
      options={{ 
        headerShown: false, 
        headerTitle: 'Login',
        headerTitleAlign: 'center',
      }} 
    />
  </LoginStack.Navigator>
);
//Register
const RegisterStack = createNativeStackNavigator();
const RegisterStackScreen = () => (
  <RegisterStack.Navigator>
    <RegisterStack.Screen 
      name="Register" 
      component={Register} 
      options={{ 
        headerShown: false, 
        headerTitle: 'Register',
        headerTitleAlign: 'center',
      }} 
    />
  </RegisterStack.Navigator>
);
//OTP_screen
const OTP_screenStack = createNativeStackNavigator();
const OTP_screenStackScreen = () => (
  <OTP_screenStack.Navigator>
    <OTP_screenStack.Screen 
      name="OTP_screen" 
      component={OTP_screen} 
      options={{ 
        headerShown: false, 
        headerTitle: 'OTP_screen',
        headerTitleAlign: 'center',
      }} 
    />
  </OTP_screenStack.Navigator>
);
//Food1
const Food1Stack = createNativeStackNavigator();
const Food1StackScreen = () => (
  <Food1Stack.Navigator>
    <Food1Stack.Screen 
      name="Food1" 
      component={Food1} 
      options={{ 
        header: () => <Food1Header/>,
      }} 
    />
  </Food1Stack.Navigator>
);
//Food2
const Food2Stack = createNativeStackNavigator();
const Food2StackScreen = () => (
  <Food2Stack.Navigator>
    <Food2Stack.Screen 
      name="Food2" 
      component={Food2} 
      options={{ 
        header: () => <Food2Header/>,
      }} 
    />
  </Food2Stack.Navigator>
);
//Food3
const Food3Stack = createNativeStackNavigator();
const Food3StackScreen = () => (
  <Food3Stack.Navigator>
    <Food3Stack.Screen 
      name="Food3" 
      component={Food3} 
      options={{ 
        header: () => <Food3Header/>,
      }} 
    />
  </Food3Stack.Navigator>
);
//Food4
const Food4Stack = createNativeStackNavigator();
const Food4StackScreen = () => (
  <Food4Stack.Navigator>
    <Food4Stack.Screen 
      name="Food4" 
      component={Food4} 
      options={{ 
        header: () => <Food4Header/>,
      }} 
    />
  </Food4Stack.Navigator>
);
//Food5
const Food5Stack = createNativeStackNavigator();
const Food5StackScreen = () => (
  <Food5Stack.Navigator>
    <Food5Stack.Screen 
      name="Food5" 
      component={Food5} 
      options={{ 
        
      }} 
    />
  </Food5Stack.Navigator>
);
//Food6
const Food6Stack = createNativeStackNavigator();
const Food6StackScreen = () => (
  <Food6Stack.Navigator>
    <Food6Stack.Screen 
      name="Food6" 
      component={Food6} 
      options={{ 
        
      }} 
    />
  </Food6Stack.Navigator>
);
//Food7
const Food7Stack = createNativeStackNavigator();
const Food7StackScreen = () => (
  <Food7Stack.Navigator>
    <Food7Stack.Screen 
      name="Food7" 
      component={Food7} 
      options={{ 
        
      }} 
    />
  </Food7Stack.Navigator>
);
//Food8
const Food8Stack = createNativeStackNavigator();
const Food8StackScreen = () => (
  <Food8Stack.Navigator>
    <Food8Stack.Screen 
      name="Food8" 
      component={Food8} 
      options={{ 
        
      }} 
    />
  </Food8Stack.Navigator>
);
//Food9
const Food9Stack = createNativeStackNavigator();
const Food9StackScreen = () => (
  <Food9Stack.Navigator>
    <Food9Stack.Screen 
      name="Food9" 
      component={Food9} 
      options={{ 
        
      }} 
    />
  </Food9Stack.Navigator>
);
//MainProfile
const MainProfileStack = createNativeStackNavigator();
const MainProfileStackScreen = () => (
  <MainProfileStack.Navigator>
    <MainProfileStack.Screen 
      name="MainProfile" 
      component={MainProfile} 
      options={{ 
        header: () => <MainProfileHeader/>,
      }} 
    />
  </MainProfileStack.Navigator>
);






const Tab = createBottomTabNavigator();

const MainTabs = () => (

      <Tab.Navigator
        screenOptions={({route}) =>({
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#f0a235',
          tabBarInactiveTintColor: '#828383',
          tabBarStyle: {
            position: 'absolute',
            left: 3,
            right: 3,
            elevation: 0,
            backgroundColor: '#B21FEB',
            borderRadius: 8,
            height: 125,
            paddingBottom: 10,
          
          },
          tabBarLabelStyle: {
            fontSize: 20,
            marginBottom: 5,
           
          },
        })}
       
      >
        <Tab.Screen 
          name='ກະຕ່າ' 
          component={Shop}
          options={{
            headerStyle: {
              backgroundColor: '#B21FEB',
            },
            headerTitleStyle: {
              fontSize: 38,
            },
            headerStatusBarHeight: 40,
            headerTitleAlign: 'center',
            headerTintColor: '#F39C12',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="shopping-cart" size={40} color={color} />
            ),
            tabBarLabel: 'ກະຕ່າ',
          }}
        />
        <Tab.Screen 
          name='Home' 
          component={Home}
          options={{
            
            header: () => <CustomHeader />,
            tabBarIcon: ({ color }) => (
              <Fontisto name="home" size={40} color={color} />
            ),
            tabBarLabel: 'ໜ້າຫຼັກ',
          }}
        />
        <Tab.Screen 
          name='User' 
          component={UserStackScreen}
         
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user-circle-o" size={40} color={color} />
            ),
            tabBarLabel: 'ຂໍ້ມູນ',
          }}
        />
      </Tab.Navigator>
   
  );

const StackScreen = () => (

  <NavigationContainer>
    <AllStack.Navigator>
      <AllStack.Screen 
        name="Main" 
        component={MainTabs} 
        options={{ headerShown: false }} 
      />
      <AllStack.Screen 
        name="Wallet" 
        component={WalletStackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Discount" 
        component={DiscountStackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="History" 
        component={HistoryStackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Map" 
        component={MapStackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Language" 
        component={LangStackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Invite" 
        component={InviteStackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Service" 
        component={ServiceStackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Setting" 
        component={SettingStackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Logout" 
        component={LogoutStackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Login" 
        component={LoginStackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Register" 
        component={RegisterStackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="OTP_screen" 
        component={OTP_screenStackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Food1" 
        component={Food1StackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Food2" 
        component={Food2StackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Food3" 
        component={Food3StackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Food4" 
        component={Food4StackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Food5" 
        component={Food5StackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Food6" 
        component={Food6StackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Food7" 
        component={Food7StackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="Food8" 
        component={Food8StackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />
      <AllStack.Screen 
        name="MainProfile" 
        component={MainProfileStackScreen} 
        options={{ 
          headerShown: false, 
        }} 
      />

    </AllStack.Navigator>
  </NavigationContainer>
);
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#B21FEB',
    padding: 10,
    height: 175,
  },
  headerTitle: {
    fontSize: 38,
    color: '#F39C12',
    textAlign: 'center',
    marginTop: 40,
  },
  searchBarContainer: {
    backgroundColor: '#B21FEB',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop: 10,
  },
  searchBarInputContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
  },
  profileContainer: {
    backgroundColor: '#828383',
    justifyContent: 'center',
    height: 150,
  },
  profileIcon: {
    bottom: 50,
    left: 12,
    height:110,
  },
  textname: {
    left: 144,
    top: 88,
    fontSize: 22,
  },
  textnumber: {
    left: 140,
    top: 94,
    fontSize: 22,
  },
  nextIcon: {
    left: 330,
    top: 35,
  },
  //food1
  Food1Container:{
    height:100,
  },
  image_larp:{
    height:270,
    width:410,
    right:10,
    bottom:20,
  },
  text_larp:{
    justifyContent: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width: 200,
    bottom: 145,
    left:90,
    textAlign:'center',
    
  },
  backfood1Icon:{
    left: 20,
    bottom: 220,
    backgroundColor: '#fff',
    borderRadius: 26.5, // ครึ่งหนึ่งของ 53
    width: 53,
    height: 53, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },

   //food2
   Food2Container:{
    height:100,
  
  },

  Image_food1:{
    height: 270,
    width: 410,
    right: 10,
    bottom: 20,
 
    
  },
  text_1_food1:{
    justifyContent: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width: 160,
    bottom: 285,
    left:115,
    textAlign:'center',
    
  },
  text_2_food1:{
    justifyContent: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width:150,
    bottom: 265,
    left:115,
    textAlign:'center',
    
  },
  text_3_food1:{
    justifyContent: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width: 80,
    bottom: 245,
    left:150,
    textAlign:'center',
    
  },
  backfood2Icon:{
    left: 20,
    bottom: 220,
    backgroundColor: '#fff',
    borderRadius: 26.5, // ครึ่งหนึ่งของ 53
    width: 53,
    height: 53, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  //food3
  Food3Container:{
    height:100,
   
  },

  Image_food2:{
    height: 270,
    width: 410,
    right: 10,
    bottom: 20,
 
    
  },
  text_1_food2:{
    justifyContent: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width: 190,
    bottom: 255,
    left:110,
    textAlign:'center',
    
  },
  text_2_food2:{
    justifyContent: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width:200,
    bottom: 235,
    left:110,
    textAlign:'center',
    
  },
 
  backfood3Icon:{
    left: 20,
    bottom: 220,
    backgroundColor: '#fff',
    borderRadius: 26.5, // ครึ่งหนึ่งของ 53
    width: 53,
    height: 53, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },

  //food4
  Food4Container:{
    height:100,
   
  },

  Image_food_set:{
    height: 270,
    width: 410,
    right: 10,
    bottom: 20,
 
    
  },
  text_1_food_set:{
    justifyContent: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width: 235,
    bottom: 255,
    left:110,
    textAlign:'center',
    
  },
  text_2_food_set:{
    justifyContent: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#DC7633",
    width:205,
    bottom: 235,
    left:110,
    textAlign:'center',
    
  },
 
  backfood4Icon:{
    left: 20,
    bottom: 220,
    backgroundColor: '#fff',
    borderRadius: 26.5, // ครึ่งหนึ่งของ 53
    width: 53,
    height: 53, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  //MainProfile
  MainProfileContainer:{
      
      height:100,
  },
  text_mainprofile:{
    fontSize: 24,
    fontWeight: "bold",
    color:'#828383',
    textAlign:'center',
    top:55,
  },
backIcon:{
    top:30,
    left:15,
    width:40,
    
},

});

export default StackScreen;
