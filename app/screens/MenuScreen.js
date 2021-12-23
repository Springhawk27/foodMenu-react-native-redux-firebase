import React from 'react'
import { View, Text, Button } from 'react-native'

const MenuScreen = (props) => {
    console.log(props)
    return (
        <View>
            <Text>Menu Screen</Text>
            <Button onPress={() => props.navigation.navigate('Dish Detail')} title="Press" ></Button >
        </View >
    )
}

export default MenuScreen
