import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { Link, Stack } from 'expo-router';

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day2 Onboarding'}} />
      <Text>Day Deatails Screen</Text>
      <Link href="/day2/onboarding" asChild>
        <Button title="Go to onboarding" />
      </Link>
    </View>
  ); 
};



export default DayDetailsScreen;


