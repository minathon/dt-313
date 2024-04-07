import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';
import {Entypo,Ionicons,FontAwesome6,MaterialCommunityIcons,Feather} from "react-native-vector-icons";

export default Teams = () => 
{
    return(
        <View>
            <Text className='w-screen pl-5 text-left text-xl text-darkblue  font-bold'>Inovations</Text>
            <View className='flex justify-center items-center shadow-lg border border-gray-200 p-3 h-[120] m-5  bg-white py-2'>
                <Text className='font-bold text-xl pt-2'>Wolidev Project</Text>
                <View className='flex flex-row py-2 justify-center items-center align-items'>
                    <View className='w-1/2 flex flex-row justify-center items-center align-items'>
                    <TouchableOpacity className='mr-2'><FontAwesome6 name='people-line' size={20} className='text-darkgreen'></FontAwesome6></TouchableOpacity>
                    <Text className='text-lg text-center '>5 Members</Text>
                    </View>
                    <View className='w-1/2 flex flex-row justify-center items-center align-items'>
                    <TouchableOpacity className='mr-2'><FontAwesome6 name='list-ul' size={20} className='text-darkgreen'></FontAwesome6></TouchableOpacity>
                    <Text className=' text-lg text-center '>10 Tasks</Text>
                    </View>
    
                </View>
                <View className='flex flex-row justify-beween'>
                    <Text className='text-darkgreen underline w-1/2 text-center'>Join</Text>
                    <Text className='text-darkgreen underline w-1/2 text-center'>Delete</Text>
                </View>
            </View>
            <Text className='w-screen pl-5 text-left text-xl text-darkblue  font-bold'>Your Teams</Text>
            
            <View className='flex justify-center items-center shadow-lg border border-gray-200 p-3 h-[120] m-5  bg-white py-2'>
                <Text className='font-bold text-xl'>Wolidev Project</Text>
                <View className='flex flex-row py-2 justify-center items-center align-items'>
                    <View className='w-1/2 flex flex-row justify-center items-center align-items'>
                    <TouchableOpacity className='mr-2'><FontAwesome6 name='people-line' size={20} className='text-darkgreen'></FontAwesome6></TouchableOpacity>
                    <Text className='text-lg text-center '>5 Members</Text>
                    </View>
                    <View className='w-1/2 flex flex-row justify-center items-center align-items'>
                    <TouchableOpacity className='mr-2'><FontAwesome6 name='list-ul' size={20} className='text-darkgreen'></FontAwesome6></TouchableOpacity>
                    <Text className=' text-lg text-center '>10 Tasks</Text>
                    </View>
    
                </View>
                <View className='flex flex-row justify-beween'>
                    <Text className='text-darkgreen underline w-1/2 text-center'>Join</Text>
                    <Text className='text-darkgreen underline w-1/2 text-center'>Delete</Text>
                </View>
            </View>
            <View className='flex justify-center items-center shadow-lg border border-gray-200 p-3 h-[120] m-5  bg-white py-2'>
                <Text className='font-bold text-xl'>Wolidev Project</Text>
                <View className='flex flex-row py-2 justify-center items-center align-items'>
                    <View className='w-1/2 flex flex-row justify-center items-center align-items'>
                    <TouchableOpacity className='mr-2'><FontAwesome6 name='people-line' size={20} className='text-darkgreen'></FontAwesome6></TouchableOpacity>
                    <Text className='text-lg text-center '>5 Members</Text>
                    </View>
                    <View className='w-1/2 flex flex-row justify-center items-center align-items'>
                    <TouchableOpacity className='mr-2'><FontAwesome6 name='list-ul' size={20} className='text-darkgreen'></FontAwesome6></TouchableOpacity>
                    <Text className=' text-lg text-center '>10 Tasks</Text>
                    </View>
    
                </View>
                <View className='w-1/2 flex flex-row justify-center items-center align-items'>
                    <TouchableOpacity className='mr-2'><Entypo name='warning' size={20} className='text-red-900'></Entypo></TouchableOpacity>
                    <Text className='text-lg text-center text-red-600'>Leave Group</Text>
                    </View>
            </View>
        </View>
    );
}