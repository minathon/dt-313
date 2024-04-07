import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';
import TimerCom from '../assets/components/TimerCom';
import NavBar from "../assets/components/NavBar";
export default Timer = () => 
{     const navigation = useNavigation();
    const handlePress = () =>
    {
        navigation.navigate('Home Page');
    }
    return(
        <View className="flex justify-center items-center">
            <TimerCom></TimerCom>
            <TouchableOpacity className='py-4 px-8 mt-8 bg-darkgreen rounded-md w-[280] flex items-center' onPress={handlePress}><Text className='text-xl text-white'>Finish</Text></TouchableOpacity>

        </View>
    );
}