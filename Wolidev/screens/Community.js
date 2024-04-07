import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../assets/components/SearchBar';
import NavBar from "../assets/components/NavBar";
export default Community = () => 
{
    const name = "Adam Levine";
    const time = "43mins ago";
    const content = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    return(
        <View className="flex items-center justify-center">
            <SearchBar></SearchBar>
            <View>
                <Image className="w-12 h-12 rounded-full" source={require('../assets/icon.png')}></Image>
                <View>
                    <Text className="font-bold">
                        {name}
                    </Text>
                    <Text className="font-bold text-gray-600"> 
                        {time}
                    </Text>
                </View>
            </View>
            <Text>
                {content}
            </Text>
        </View>
    );
}