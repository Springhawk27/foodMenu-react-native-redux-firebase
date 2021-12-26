import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: props.item.image }} />
            <View style={styles.details}>
                <Text style={styles.title}>{props.item.name}</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: '#E1FDFE',
        overflow: 'hidden',
        margin: 20,
        elevation: 5,
    },
    details: {
        padding: 25,
    },
    image: {
        width: '100%',
        height: 150,
    },
    title: {
        marginBottom: 10,
        fontSize: 20,
    }
})

export default Card
