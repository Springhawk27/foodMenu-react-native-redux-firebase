import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import DishDetailScreen from './screens/DishDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MenuStack = () => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: '#F53F50',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }
            }
        >
            <Stack.Screen name="See all the available items" component={MenuScreen} />
            <Stack.Screen name="Dish Detail"
                component={DishDetailScreen}
                options={({ route }) => ({ title: route.params.dish.name })}
            />
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Food Menu" component={MenuStack} />
        </Drawer.Navigator>

    )
}

export default AppNavigator
