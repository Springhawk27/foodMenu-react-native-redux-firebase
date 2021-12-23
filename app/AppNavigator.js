import React from 'react'
import { View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import DishDetailScreen from './screens/DishDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MenuStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="See all the available items" component={MenuScreen} />
            <Stack.Screen name="Dish Detail" component={DishDetailScreen} />
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Menu" component={MenuStack} />
        </Drawer.Navigator>
    )
}

export default AppNavigator
