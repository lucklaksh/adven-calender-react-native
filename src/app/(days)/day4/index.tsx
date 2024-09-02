import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Markdown
Animated splash screen
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{flex:1}}>
      <Stack.Screen options={{ title: 'Day4: Splash Screen'}} />
      
      <MarkdownDisplay>{description}</MarkdownDisplay>
      
      <Link href="/day4/animation" asChild>
        <Button title="Go to animation" />
      </Link>
      <Link href="/day4/splash" asChild>
        <Button title="Go to splash screen animation" />
      </Link>
    </SafeAreaView>
  ); 
};



export default DayDetailsScreen;


