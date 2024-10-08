import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Markdown

***complete the assignments***
-create the componets and others
-create a custom files and cores
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{flex:1}}>
      <Stack.Screen options={{ title: 'Day3: Markdown'}} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day3/editor" asChild>
        <Button title="Go to editor" />
      </Link>
    </SafeAreaView>
  ); 
};



export default DayDetailsScreen;


