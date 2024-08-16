import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 1 Onboarding'}} />
      <Text>Adven-calender App setup completed</Text>
    </View>
  );
};

export default DayDetailsScreen;


