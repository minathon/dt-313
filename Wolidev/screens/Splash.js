import React from "react";
import { View, Text, Image,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import coding from '../assets/coding_2.json'
import { useNavigation } from '@react-navigation/native';
export default Splash = () => {
    const navigation = useNavigation();
    const handlePress = () => {
        console.log("Button pressed");
        navigation.navigate('Login');
    };
    const handlePress1 = () => {
      console.log("Button pressed");
      navigation.navigate('Sign Up');
  };
    return (

      <View className='flex-1 items-center pt-12'>
        <LottieView 
                source={coding}
                autoPlay
                loop
                style={{ width: 350, height: 280 }}
                className=''
            />
        <Text className='font-bold text-2xl pt-10'>Welcome to</Text>
        <Text className='text-darkblue text-6xl font-bold pb-5 pt-5'>Wolidev</Text>
        <Text className='text-xl text-center text-darkgreen font-medium mb-8'>Work - Life balance for developers</Text>
        <TouchableOpacity onPress={handlePress} className='flex items-center py-4 px-8 bg-darkgreen rounded-3xl w-[200]'><Text className='text-xl text-white'>Login</Text></TouchableOpacity>
        <TouchableOpacity onPress={handlePress1} className='flex items-center py-4 px-8 m-6 bg-darkgreen rounded-3xl w-[200]'><Text className='text-xl text-white'>Sign Up</Text></TouchableOpacity>
      </View>

  );
};
