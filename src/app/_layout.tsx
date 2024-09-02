// common UI elements in a screen
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import DayListItem from '../../src/components/core/DayListItem';
import { useFonts, Inter_900Black, Inter_600SemiBold , Inter_400Regular} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import {AmaticSC_400Regular, AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc'
import { Component, useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import AnimatedSplashScreen from '@/components/day4/animatedSplashScreen';
import Animated, { FadeIn } from 'react-native-reanimated';

// SplashScreen.preventAutoHideAsync();



export default function RootLayout () {
    const [appReady, setAppReady] = useState(false)
    const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

    const  [fontsLoaded, fontError]= useFonts({
        Inter: Inter_400Regular,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
        InterSemi: Inter_600SemiBold,
    });
    
    useEffect(() => {
        if (fontsLoaded || fontError){
        // add the animation part of the splash screen here
        //   SplashScreen.hideAsync();
          setAppReady(true)
        }
    }, [fontsLoaded, fontError])

    const showAnimatedSplash = !appReady || !splashAnimationFinished;

    if (showAnimatedSplash) {
        return (
          <AnimatedSplashScreen
            onAnimationFinish={(isCancelled) => {
              if (!isCancelled) {
                setSplashAnimationFinished(true);
              }
            }}
          />
        );
      }
    
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Animated.View style={{ flex: 1 }} entering={FadeIn}>
                <Stack  screenOptions={{}}>
                    <Stack.Screen name="index" options={{ title: 'Advent Calender'}} />
                </Stack>
            </Animated.View>
        </GestureHandlerRootView>
    );
};
