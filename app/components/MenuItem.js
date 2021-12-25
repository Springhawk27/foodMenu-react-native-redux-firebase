import React from 'react'
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native'

const MenuItem = (props) => {
    return (
        <TouchableHighlight style={styles.menuContainer} onPress={props.selectDish}>
            <View style={styles.container}>
                {props.item.image && <Image
                    style={styles.image}
                    source={{ uri: props.item.image }} />}

                <View style={styles.details}>
                    <Text style={styles.name}>{props.item.name}</Text>
                    <Text style={styles.description} numberOfLines={3}>{props.item.description}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    menuContainer: {
        marginBottom: 5,


    },
    container: {
        aligItems: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'beige'

    },

    details: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    image: {
        width: 75,
        height: 75,

    },
    name: {
        fontWeight: 500,

    },
    description: {
        color: '#6e6969',
    },
    price: {
        color: 'yellow',
    }
})

export default MenuItem
