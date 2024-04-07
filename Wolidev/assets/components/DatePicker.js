import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Datepicker from 'react-tailwindcss-datepicker'; 

const MyDatePicker = () => {
  const [date, setDate] = useState(new Date());

  const handleChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <View>
      <Datepicker
        date={date}
        onChange={handleChange}
        dateFormat="yyyy-MM-dd"
        minDate={new Date('2020-01-01')}
        maxDate={new Date('2025-12-31')}
        textColor="#000"
        selectedTextColor="#fff"
        selectedBackgroundColor="#3182ce"
        placeholder="Select date"
      />
      <Text>Selected Date: {date.toLocaleDateString()}</Text>
    </View>
  );
};

export default MyDatePicker;
