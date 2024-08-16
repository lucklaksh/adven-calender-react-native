import {StyleSheet, View, Text, SafeAreaView, Pressable } from "react-native";
import { Stack, router } from "expo-router";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';
import Animated, { SlideInLeft, SlideInRight, SlideOutRight}  from "react-native-reanimated";
import {FadeIn, FadeInDown, BounceInRight, BounceOutLeft} from "react-native-reanimated";

const onboardingSteps = [
    {
        icon: 'money-bill-transfer',
        title: 'Welcome' ,
        description: 'Day 2 will be as Exciting as always, after completion you will be one step lesser to the App developer'
    },
    {
        icon: 'smile-wink',
        title: 'Tasks' ,
        description: 'Rework on the previous project, know how to implement images, buttons, animations, navigators and much more.'
    },
    {
        icon: 'smile-wink',
        title: 'Thank you' ,
        description: 'Please complete the challenges of day2, lets meet tomorrow with another interesting project, Bye!'
    },

];


export default function onboarding() {
    const [screenIndex, setScreenIndex] = useState(0);
    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const islastIndex = screenIndex === onboardingSteps.length - 1;
        if (islastIndex){
            endOnboarding();

        }
        else{
            setScreenIndex(screenIndex + 1);
        }
    }
    const  endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    }

    const onBack = () => {
      const isFirstIndex = screenIndex === 0 ;
      if (isFirstIndex){
        endOnboarding();
      }
      else{
        setScreenIndex(screenIndex -1);
      }
    }
        
    const swipeForward = Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue);
    const swipeBack = Gesture.Fling().direction(Directions.RIGHT).onEnd((event) => {
      onBack();
    });
    
    const swipes = Gesture.Simultaneous(swipeBack, swipeForward);

    return (

        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{headerShown:false}} />
            <StatusBar style="light" />
            <GestureDetector gesture={swipes}>
              <View style={styles.pageContent} key={screenIndex}>
                <View style={styles.stepIndicatorContainer}>
                    {onboardingSteps.map((step, index) => (
                        <View 
                            key={index}
                            style={[
                            styles.stepIndicator,
                            {backgroundColor : index === screenIndex ? 'white' : 'gray'},
                        ]} />
                    ))}
                </View>
                <FontAwesome6 
                name={data.icon} 
                size={200} 
                color="yellow" 
                style={styles.image} 
                />
              
                <View style={styles.footer}>
                    <Animated.Text entering={SlideInLeft} exiting={SlideOutRight} style={styles.title}>{data.title}</Animated.Text>
                    <Animated.Text entering={SlideInLeft.delay(300)} exiting={SlideOutRight} style={styles.description}>{data.description}</Animated.Text>
                    
                    <View style={styles.buttonRow}>
                        <Text onPress={endOnboarding} style={styles.buttonText}>Skip</Text>

                        <Pressable onPress={onContinue} style={styles.button}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </Pressable>

                    </View>
                </View>
              </View>
            </GestureDetector> 
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {
      page: {
        justifyContent:'center',
        // alignItems: 'center',
        backgroundColor: '#15141A',
        
        flex: 1,  
      },
      title: {
        color: '#FDFDFD',
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'InterSemi',
        letterSpacing: 1.3,
        marginVertical: 20

      },
      description: {
        color: 'gray',
        fontSize: 18,
        fontFamily: 'Inter',
        lineHeight: 27
      },
      image: {
        alignSelf: 'center',
        margin: 20,
      },
      footer: {
        marginTop:'auto',
      },
      pageContent: {
        padding: 20,
        flex: 1,
      },
      button: {
        backgroundColor: '#302E38',
        padding: 15,
        borderRadius: 50,
        flex: 1,
        alignItems: 'center',
        

      },
      buttonRow: {
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,

      },
      buttonText: {
        color: '#FDFDFD',
        fontFamily: 'InterSemi',
        fontSize: 16,
        padding: 15,
        paddingHorizontal: 25,
      },
      //Steps
      stepIndicatorContainer: {
        flexDirection: 'row',
        gap: 8,
        marginHorizontal: 15,
      },
      stepIndicator: {
        flex: 1,
        height: 3,
        backgroundColor: 'gray',
        borderRadius: 10,
      },

  
    }
  )