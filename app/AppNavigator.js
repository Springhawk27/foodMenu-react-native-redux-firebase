import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import DishDetailScreen from './screens/DishDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from './components/Icon';
import { useNavigation } from '@react-navigation/native';
import FavouritesScreen from './screens/FavouritesScreen';
import Login from './components/Login';





const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MenuStack = () => {

    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerRight: () => (<Icon
                        action={() => navigation.toggleDrawer()}
                        name="ios-menu"
                        color="black"
                        size={24}
                        iconStyle={{
                            paddingRight: 15
                        }}
                    ></Icon>),
                    headerStyle: {
                        // backgroundColor: '#FF9933',
                        backgroundColor: '#7ECC49',
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
        </Stack.Navigator >
    )
}


const FavouriteStack = () => {
    const navigation = useNavigation();

    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerRight: () => (<Icon
                        action={() => navigation.toggleDrawer()}
                        name="ios-menu"
                        color="black"
                        size={24}
                        iconStyle={{
                            paddingRight: 15
                        }}
                    ></Icon>),
                    headerStyle: {
                        // backgroundColor: '#FF9933',
                        backgroundColor: '#7ECC49',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }
            }
        >

            <Stack.Screen name="Favourites" component={FavouritesScreen}>

            </Stack.Screen>
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    return (

        <Drawer.Navigator initialRouteName="Food Menu">
            <Drawer.Screen name="Login" component={Login} />

            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Food Menu" component={MenuStack} />
            <Drawer.Screen name="Favourites" component={FavouriteStack} />
        </Drawer.Navigator>

    )
}

export default AppNavigator
