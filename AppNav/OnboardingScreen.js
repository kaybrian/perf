import { View, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation();

    const DotComponent = ({ selected }) => {
        return (
            <View classNam={`w-4 h-4 mx-2 items-center p-2 justify-center rounded-full ${selected && "p-2 border border-red-400"}`}>
                <View className={`w-2 px-2 rounded-full mx-1 h-2 ${selected ? "bg-blue-700" : "bg-blue-200"}`}>

                </View>
            </View>
        )
    }



    return (
        <Onboarding
            onSkip={() => navigation.replace("Home")}
            onDone={() => navigation.replace("Home")}
            DotComponent={DotComponent}
            pages={
                [
                    {
                        backgroundColor: '#fff',
                        image: <Image
                            source={require('../assets/virtual.gif')}
                            resizeMode='contain'
                            style={{
                                width: 400,
                                height: 400,
                            }}
                        />,
                        title: 'Pref',
                        subtitle: "Meet your new virtual personal friend! They're here to keep you company and offer support.",
                    },

                ]}
        />

    )
}

export default OnboardingScreen
