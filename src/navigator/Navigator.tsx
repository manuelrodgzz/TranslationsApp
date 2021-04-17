import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import NewTranslationScreen from '../screens/NewTranslationScreen';

const Stack = createStackNavigator()

const Navigator = () => {
    return (
        <Stack.Navigator 
            headerMode='none' 
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#e2cfea'
                }
            }}
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='NewTranslationScreen' component={NewTranslationScreen}/>
        </Stack.Navigator>
    )
}

export default Navigator
