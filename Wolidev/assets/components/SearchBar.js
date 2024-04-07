import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text,Image } from 'react-native';
import { Feather } from 'react-native-vector-icons';
import { TailwindProvider } from 'tailwindcss-react-native';


export default SearchBar = () =>{
    const [searchQuery, setSearchQuery] = useState('');
    const handleSubmit = () => {
        console.log('Search Query:', searchQuery);
        setSearchQuery('');
      };
    
    return(
        <TailwindProvider>
            <View className='flex flex-row w-screen items-center justify-center'>
                    <View ><Feather name="search" size={20} color="gray" /></View>
                    <View >
                        <TextInput
                        className='p-4 w-[260] text-sm text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500'
                        placeholder="What are you looking for ..."
                        placeholderTextColor="gray"
                        onChangeText={setSearchQuery}
                        onSubmitEditing={handleSubmit}
                        required
                        />
                    </View>
                    {/* <Image 
                    source={logo}
                    className="w-[60] h-[30]"
                    />       */}
            </View>
        </TailwindProvider>
    );
}