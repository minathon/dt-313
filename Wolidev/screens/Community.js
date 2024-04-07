import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../assets/components/SearchBar';
import NavBar from "../assets/components/NavBar";
import {FontAwesome,Ionicons} from 'react-native-vector-icons';
export default Community = () => 
{
    const name = "Adam Levine";
    const time = "43mins ago";
    const content = "Our 1-day flagship event aims to create a lasting legacy by fostering relationships through interactive engagement, education and collaboration. By creating opportunities for the industry to come together, share, learn, collaborate, and showcase solutions, EXPERIENCEit aims to support the growing and robust community who design and deliver experiences.ve got the perfect connections for you";
    return(
        <View className="flex items-center justify-center">
            <SearchBar></SearchBar>
            <View className='w-full'><TouchableOpacity onPress={() => setModalVisible(true)} className='py-2 px-8 my-2 mx-4 bg-gray-300 rounded-md flex flex-row items-center'>
                    <FontAwesome name='pencil' size={20} className='text-white mr-2'></FontAwesome>
                    <Text className='text-sm text-white'>Write something here ...</Text>
                </TouchableOpacity></View>
            
            <View className="px-5 py-4 flex flex-row  items-center w-full">
                <Image className="w-12 h-12 rounded-full pr-10"                 source={{uri:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}}
></Image>
                <View className='ml-3'>
                    <Text className="font-bold">
                        {name}
                    </Text>
                    <Text className="font-bold text-gray-600"> 
                        {time}
                    </Text>
                </View>
            </View>
            <Text className="px-5">
                {content}
            </Text>
            <View className="px-5 py-4 flex flex-row  items-center w-full">
                <Image className="w-12 h-12 rounded-full pr-10"                 source={{uri:'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}}
></Image>
                <View className='ml-3'>
                    <Text className="font-bold">
                    Courtney Henry
                    </Text>
                    <Text className="font-bold text-gray-600"> 
                        {time}
                    </Text>
                </View>
            </View>
            <Text className="px-5">
                {content}
            </Text>
            <View className="px-5 py-4 flex flex-row  items-center w-full">
                <Image className="w-12 h-12 rounded-full pr-10"                 source={{uri:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}}
></Image>
                <View className='ml-3'>
                    <Text className="font-bold">
                        {name}
                    </Text>
                    <Text className="font-bold text-gray-600"> 
                        {time}
                    </Text>
                </View>
            </View>
            <Text className="px-5">
                {content}
            </Text>
        </View>
    );
}