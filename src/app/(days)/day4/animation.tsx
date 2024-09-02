
import { View, Text , Button} from "react-native"
import LottieView from "lottie-react-native";
import React from "react";
import { useRef } from "react";


const AnimationScreen = () => {
    const Animation = useRef<LottieView>(null);
    return (
        <View>
            <LottieView
                ref = {Animation}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#eee',
                }}
                 // Find more Lottie files at https://lottiefiles.com/featured
                source={require('@assets/lottie/netflix.json')}
            />
            <Button title='play' onPress={() => Animation.current?.play()} />
            <Button title='pause' onPress={() => Animation.current?.pause()} />
            <Button title='reset' onPress={() => Animation.current?.reset()} />
        </View>
    )
    
}

export default AnimationScreen;