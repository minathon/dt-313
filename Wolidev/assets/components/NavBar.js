import React from "react";
import { View, Text, Image,TouchableOpacity} from "react-native";
import {Entypo,Ionicons,FontAwesome6,MaterialCommunityIcons} from "react-native-vector-icons";

export default NavBar = () =>
{
    return (
        <View className='flex flex-row justify-between'>
            <View className='mx-2'><Entypo name='home' size={40}/></View>
            <View className='mx-2'><Ionicons name='timer' size={40}/></View>
            <View className='mx-2'><Ionicons name='earth-sharp' size={40}/></View>
            <View className='mx-2'><FontAwesome6 name='people-line' size={40}></FontAwesome6></View>
            <View className='mx-2'><MaterialCommunityIcons name='account' size={40}></MaterialCommunityIcons></View>           
        </View>
    );
}