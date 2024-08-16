import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { Link, Stack } from 'expo-router';

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day3: Markdown'}} />
      <Text>Day Deatails Screen</Text>
      <Link href="/day3/editor" asChild>
        <Button title="Go to editor" />
      </Link>
    </View>
  ); 
};



export default DayDetailsScreen;


