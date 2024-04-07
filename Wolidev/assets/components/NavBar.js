import {React, useState }from "react";
import { View, Text, Image,TouchableOpacity} from "react-native";
import {Entypo,Ionicons,FontAwesome6,MaterialCommunityIcons} from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
export default NavBar = () =>
{   const navigation = useNavigation();
    const [selectedIcon, setSelectedIcon] = useState(null);

    const pressHome = () => {
        navigation.navigate('Home Page');
        setSelectedIcon('home');
    }

    const pressTimer = () => {
        navigation.navigate('Timer');
        setSelectedIcon('timer');
    }

    const pressCommu = () => {
        navigation.navigate('Community of Developers');
        setSelectedIcon('earth-sharp');
    }

    const pressGroup = () => {
        navigation.navigate('Teams');
        setSelectedIcon('people-line');
    }

    const pressAcc = () => {
        navigation.navigate('Your Account');
        setSelectedIcon('account');
    }

    const iconColor = (iconName) => {
        return selectedIcon === iconName ? '#199A8E' : '#000'; 
    }
    return (
        <View className='flex flex-row grow w-screen px-4 justify-between'>
            <TouchableOpacity onPress={pressTimer} className='mr-4'><Ionicons name='timer' size={40}/></TouchableOpacity>
            <TouchableOpacity onPress={pressCommu} className='mr-4'><Ionicons name='earth-sharp' size={40}/></TouchableOpacity>
            <TouchableOpacity onPress={pressHome} className='mr-4'><Entypo name='home' size={40}/></TouchableOpacity>
            <TouchableOpacity onPress={pressGroup}className='mr-4'><FontAwesome6 name='people-line' size={40}></FontAwesome6></TouchableOpacity>
            <TouchableOpacity onPress={pressAcc} className='mr-4'><MaterialCommunityIcons name='account' size={40}></MaterialCommunityIcons></TouchableOpacity>           
        </View>
    );
}