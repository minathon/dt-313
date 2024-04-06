import React from "react";
import { View, Text, Image,TouchableOpacity} from "react-native";
import Entypo from "react-native-vector-icons";
//import Ionicons from "react-native-vector-icons";
export default NavBar = () =>
{
    return (
        <View>
            <Entypo name='home' size={20}/>
            {/* <Ionicons name='timer' size={20}/> */}
        </View>
    );
}