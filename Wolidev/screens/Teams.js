import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';
import {Entypo,Ionicons,FontAwesome6,MaterialCommunityIcons,Feather} from "react-native-vector-icons";
import NavBar from "../assets/components/NavBar";
export default Teams = () => 
{
    const [teams, setTeams] = useState([
        { name: 'Wolidev Project', members: 5, tasks: 10 },
        { name: 'Design for fun', members: 5, tasks: 5 },
        // Thêm các nhóm khác nếu cần
    ]);

    // Hàm xử lý sự kiện khi nhấn vào nút "Leave Group"
    const handleLeaveGroup = (index) => {
        // Xóa nhóm khỏi danh sách
        const updatedTeams = [...teams];
        updatedTeams.splice(index, 1);
        setTeams(updatedTeams);
    };

    return(
        <View className='h-screen'>
            <Text className='w-screen pl-5 text-left text-xl text-darkblue  font-bold'>Invitations</Text>
            <View className='flex justify-center items-center shadow-lg border border-gray-200 p-3 h-[120] m-5  bg-white py-2'>
                <Text className='font-bold text-xl pt-2'>Hapo Project</Text>
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
            
{/*             
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
            </View> */}
            {teams.map((team, index) => (
                <View key={index} style={{ justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, borderWidth: 1, borderColor: '#ccc', padding: 10, margin: 10, backgroundColor: 'white' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{team.name}</Text>
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
                    <TouchableOpacity onPress={() => handleLeaveGroup(index)} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name='warning' size={20} style={{ color: 'red', marginRight: 5 }} />
                        <Text style={{ color: 'red' }}>Leave Group</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}