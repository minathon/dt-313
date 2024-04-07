import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from "../assets/components/NavBar";

import homeJson from "../assets/coding_2.json";

export default SignUp  = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const navigation = useNavigation();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handlePress = () => {
    console.log("Button pressed");
    navigation.navigate('Login');
  };
  return (
    <TailwindProvider>
      <View className='flex-1 items-center pb-10 pt-10'>
        <Text className='font-bold text-2xl'>Welcome to</Text>
        {/* <Image 
          source={logo}
          className="w-[280] h-[140]"
        />     */}
        <Text className='text-darkblue text-6xl font-bold pt-10'>Wolidev</Text>
        <LottieView 
          source={homeJson}
          autoPlay
          loop
          style={{width: 200, height: 250}}
        />           
        <View className='mb-2'>
          <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[280] pl-5 pr-40 py-3 text-left'
          placeholder="Enter your Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          required>

          </TextInput>
        </View>
        <View className='mb-2'>
          <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[280] pl-5 pr-20 py-3 text-left'
          placeholder="Enter your password"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          required>

          </TextInput>
        </View>
        <View>
          <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[280] pl-5 pr-20 py-3 text-left'
          placeholder="Confirm your password"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          required>

          </TextInput>
        </View>
        <TouchableOpacity className='py-4 px-8 mt-4 bg-darkgreen rounded-md w-[280] flex items-center' onPress={handlePress}><Text className='text-xl text-white'>Sign Up</Text></TouchableOpacity>
        <Text className='pt-2'>Have an account ? <Text className='text-darkgreen'>Login</Text></Text>
      </View>
    </TailwindProvider>
  );
};
