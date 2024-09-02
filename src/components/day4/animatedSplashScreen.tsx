
import { View} from "react-native"
import LottieView from "lottie-react-native";
import React from "react";
import { useRef } from "react";
import Animated, {
    FadeIn,
    FadeOut,
    ZoomIn,
    ZoomOut,
  } from 'react-native-reanimated';
  
const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
    onAnimationFinish = (isCancelled) => {},
  }: {
    onAnimationFinish?: (isCancelled: boolean) => void;
  }) => {
    const Animation = useRef<LottieView>(null);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
        
            <AnimatedLottieView
                ref = {Animation}
                onAnimationFinish={onAnimationFinish}
                loop={false}
                autoPlay
                style={{
                    width: '80%',
                    maxWidth: 400,
                    height: 400,
                }}
                source={require('@assets/lottie/netflix.json')}
            />
        </View>
    )
    
}

export default AnimatedSplashScreen;