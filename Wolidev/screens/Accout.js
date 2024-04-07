import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity,ScrollView} from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';
import {Feather, Entypo} from 'react-native-vector-icons';
export default Account = () =>
{
    const navigation = useNavigation();
    const handlePress = () =>
    {
        navigation.navigate('Login');
    }
    return(
        <TailwindProvider>
            <View className='flex-1 items-center pt-10 '>
                <Image
                className='w-[80] h-[80] rounded-full mr-4'
                source={{uri:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}}
                />
                <Text className='font-bold text-darkgreen text-xl pt-2 pb-10'>Amelia Renata</Text>
                <ScrollView className='pb-25'>
                    <View className='flex flex-row items-center pb-4'>
                        <View className='rounded-full bg-light p-2 mr-3'>
                            <Entypo name='time-slot' size={20} className='text-darkgreen'></Entypo>
                        </View>
                        <Text className='font-bold text-lg w-[240] '>Frequence for use</Text>
                        <TouchableOpacity><Feather name='chevron-right' size={20}></Feather></TouchableOpacity>
                    </View>
                    <View className='flex flex-row items-center pb-4'>
                        <View className='rounded-full bg-light p-2 mr-3'>
                            <Entypo name='text-document' size={20} className='text-darkgreen'></Entypo>
                        </View>
                        <Text className='font-bold text-lg w-[240] '>User Information</Text>
                        <TouchableOpacity><Feather name='chevron-right' size={20}></Feather></TouchableOpacity>
                    </View>
                    <View className='flex flex-row items-center pb-4'>
                        <View className='rounded-full bg-light p-2 mr-3'>
                            <Entypo name='sweden' size={20} className='text-darkgreen'></Entypo>
                        </View>
                        <Text className='font-bold text-lg w-[240] '>Task List</Text>
                        <TouchableOpacity><Feather name='chevron-right' size={20}></Feather></TouchableOpacity>
                    </View>
                    <View className='flex flex-row items-center pb-4'>
                        <View className='rounded-full bg-light p-2 mr-3'>
                            <Entypo name='back-in-time' size={20} className='text-darkgreen'></Entypo>
                        </View>
                        <Text className='font-bold text-lg w-[240] '>Ativity History</Text>
                        <TouchableOpacity><Feather name='chevron-right' size={20}></Feather></TouchableOpacity>
                    </View>
                    <View className='flex flex-row items-center pb-4'>
                        <View className='rounded-full bg-red-400 p-2 mr-3'>
                            <Entypo name='warning' size={20} className='text-red-900'></Entypo>
                        </View>
                        <Text className='font-bold text-lg w-[240] text-red-600 '>Log out</Text>
                        <TouchableOpacity onPress={handlePress}><Feather name='chevron-right' size={20}></Feather></TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        </TailwindProvider>
    );
}