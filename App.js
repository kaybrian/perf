import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './AppNav/OnboardingScreen'
import HomeScreen from './Screens/HomeScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();


export default function App() {
  const [onboarding, setOnboarding] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("onboarding").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("onboarding", "true");
        setOnboarding(true);
      } else {
        setOnboarding(false);
      }
    });
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !onboarding && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
              options={{
                headerShown: false,
                presentation: "fullScreenModal",
              }}
            />
          )
        }
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            presentation: "fullScreenModal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


