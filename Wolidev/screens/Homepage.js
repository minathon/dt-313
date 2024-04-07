import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity, ScrollView,Modal} from "react-native"
import MyDatePicker from "../assets/components/DatePicker";
import {FontAwesome,FontAwesome6} from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import NavBar from "../assets/components/NavBar";
export default Homepage = () =>
{   const navigation = useNavigation();
    const play = () =>
    {
        navigation.navigate('Timer');
    }
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [newTask, setNewTask] = useState("");
    const [newTime, setNewTime] = useState("");
    const [newTime2, setNewTime2] = useState("");
    const handleAddTimeline = () => {
        const newTimeline = { time: newTime, task: newTask };
        setTimelineData([...timelineData, newTimeline]);
        setModalVisible(false); 
        setNewTask(""); 
        setNewTime(""); 
    }

    const [timelineData, setTimelineData] = useState([
        { time: '00:00', task: 'Sleeping Time' },
        { time: '06:00', task: 'Working' },
        { time: '11:00', task: 'Breakfast' },
        { time: '13:00', task: 'Lunch' },
        { time: '17:00', task: 'Exercise' },
        { time: '19:00', task: 'Dinner' },
        { time: '20:00', task: 'Relaxation' }
    ]);
    const taskData = [
        { time: '11:00', taskName: 'Coding for Project A', project: 'Project A' },
        { time: '13:00', taskName: 'Coding for Project B', project: 'Project B' },
        { time: '17:00', taskName: 'Coding for Project C', project: 'Project C' },
        { time: '19:00', taskName: 'Coding for Project D', project: 'Project D' },
        { time: '20:00', taskName: 'Relaxation', project: 'None' }
    ];

    return(
        <View className="flex justify-center items-center">
            <Text className="font-bold text-3xl pt-3">
                It's working time !!!
            </Text>
            <Text className='w-screen pl-5 text-left text-xl text-darkblue  font-bold'>Timeline</Text>
            <View className='flex flex-row w-full'> 
            <TouchableOpacity className='py-2 px-8 my-2 mx-4 bg-darkgreen rounded-md w-[1/2] flex flex-row  items-center'>
            <FontAwesome name='calendar' size={20} className='text-white mr-2'></FontAwesome>
                <Text className='text-xl text-white'>Today</Text></TouchableOpacity>
            
                <TouchableOpacity onPress={() => setModalVisible(true)} className='py-2 px-8 my-2 mx-4 bg-darkgreen rounded-md w-[1/2] flex flex-row items-center'>
                    <FontAwesome name='plus-circle' size={20} className='text-white mr-2'></FontAwesome>
                    <Text className='text-xl text-white'>Add</Text>
                </TouchableOpacity>

            </View>

            <ScrollView className='w-screen h-1/4'>
                {timelineData.map((item, index) => (
                    <View key={index} className='border-b border-gray-200 px-5 py-2 flex flex-row'>
                        <Text className='w-1/3 text-xl font-bold text-gray-600'>{item.time}</Text>
                        <Text className='w-2/3 text-xl font-bold text-gray-900'>{item.task}</Text>
                    </View>
                ))}
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Add New Timeline</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
                            placeholder="Enter task name"
                            value={newTask}
                            onChangeText={(text) => setNewTask(text)}
                        />
                        <TextInput
                            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
                            placeholder="Start time"
                            value={newTime}
                            onChangeText={(text) => setNewTime(text)}
                        />
                        <TextInput
                            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
                            placeholder="End time"
                            value={newTime2}
                            // onChangeText={(text) => setNewTime(text)}
                        />
                        <TouchableOpacity onPress={handleAddTimeline} style={{ backgroundColor: '#199A8E', padding: 10, borderRadius: 5 }}>
                            <Text style={{ color: 'white', textAlign: 'center' }}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Text className='w-screen p-5 text-left text-xl text-darkblue  font-bold flex justify-center align-items items-center'>Task <TouchableOpacity onPress={() => setModalVisible2(true)} className='ml-4 flex flex-row items-center'>
                    <FontAwesome name='plus-circle' size={15} className='text-darkgreen mr-2'></FontAwesome>
                </TouchableOpacity></Text>
                <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                    setModalVisible2(false);
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Add New Task</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
                            placeholder="Enter task name"
                            value={newTask}
                            onChangeText={(text) => setNewTask(text)}
                        />
                        <TextInput
                            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
                            placeholder="Start time"
                            value={newTime}
                            onChangeText={(text) => setNewTime(text)}
                        />
                        <TextInput
                            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
                            placeholder="End time"
                            // onChangeText={(text) => setNewTime(text)}
                        />
                        <TouchableOpacity onPress={handleAddTimeline} style={{ backgroundColor: '#199A8E', padding: 10, borderRadius: 5 }}>
                            <Text style={{ color: 'white', textAlign: 'center' }}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <ScrollView className='w-full h-1/4'>
                {/* <View className='w-1/4'>
                    <TouchableOpacity className='rounded-full w-[30] h-[30] bg-light flex items-center justify-center'>
                        <FontAwesome name="play" size={20} className="text-darkgreen"/>
                    </TouchableOpacity>
                </View> */}
                <ScrollView className='w-full h-1/4'>
                {taskData.map((task, index) => (
                    <View key={index}>
                        <View className='flex flex-row px-5'>
                            <Text className='text-left w-1/2 text-xl font-bold'>{task.taskName}</Text>
                            <Text className='text-right w-1/2'>{task.time}</Text>
                        </View>
                        <View className='flex flex-row px-4 py-2'>
                            <Text className='bg-blue-200 text-blue-700 w-1/4 text-center py-1 mr-2'>Team</Text>
                            <Text className='bg-red-200 text-red-700 w-1/4 text-center py-1'>{task.project}</Text>
                            <FontAwesome name="play" onPress={play} size={25} className="text-right text-gray-600 w-2/4 px-2"/>
                        </View>
                    </View>
                ))}
                </ScrollView>
                
            </ScrollView>
            <Text className='w-screen p-5 pb-28 text-left text-xl text-darkblue  font-bold '>Github</Text>
            <NavBar></NavBar>
            
        </View>
    );
}