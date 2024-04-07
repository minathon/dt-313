import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {FontAwesome} from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

const TimerCom = () => {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, []);

  const update = () => {
    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  const start = () => {
    const id = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    setIntervalId(id);
  };

  const pause = () => {
    clearInterval(intervalId);
  };

  const reset = () => {
    clearInterval(intervalId);
    setSeconds(0);
    navigation.navigate('Home Page');
  };

  return (
    <View className='flex justify-center items-center'>
      <Text className="text-3xl font-bold text-darkblue p-10">UI Design</Text>
      <View className='mb-10 rounded-full flex justify-center items-center border-8 border-darkblue w-[180] h-[180]'>
        <Text style={styles.timerText} className='text-darkgreen'>{update()}</Text>
      </View>
      <View className="flex flex-row w-screen justify-between px-10">
        <TouchableOpacity onPress={start} className='rounded-full w-[55] h-[55] bg-light flex items-center justify-center'>
          <FontAwesome name="play" size={25} className="text-darkgreen"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={pause} className='rounded-full w-[55] h-[55] bg-light flex items-center justify-center' >
          <FontAwesome name="pause" size={25} className="text-darkgreen"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset}  className='rounded-full w-[55] h-[55] bg-light flex items-center justify-center'>
        <FontAwesome name="sign-out" size={25} className="text-darkgreen"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timerContainer: {
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  timerText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  startButton: {
    backgroundColor: '#007bff',
  },
  pauseButton: {
    backgroundColor: '#f4c542',
  },
  resetButton: {
    backgroundColor: '#f44336',
  },
});

export default TimerCom;
