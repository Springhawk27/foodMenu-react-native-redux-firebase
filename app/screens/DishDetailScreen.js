import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const DishDetailScreen = (props) => {
    const dish = props.route.params.dish
    return (
        <View style={styels.container}>
            {dish.image && <Image
                style={styels.image}

                source={{ uri: dish.image }} />}
            <View style={styels.details}>
                <Text style={styels.name}>{dish.name}</Text>
                <Text style={styels.description} >{dish.description}</Text>
                <Text style={styels.price} >{dish.price} taka</Text>

            </View>
        </View>
    )
}

const styels = StyleSheet.create({
    container: {
        aligItems: 'center',
        flexDirection: 'column',
        padding: 15,

    },

    details: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    image: {
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: 300,

    },
    name: {
        fontWeight: 500,
        fontSize: 20,
        paddingBottom: 5,

    },
    description: {
        color: '#6e6969',
        paddingBottom: 5,
    },
    price: {
        color: 'red',
    }
})

export default DishDetailScreen
