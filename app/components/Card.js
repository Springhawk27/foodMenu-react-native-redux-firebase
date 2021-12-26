import React from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

import { connect } from 'react-redux';
import { removeFromFavourites } from '../redux/actionCreators';

const mapDispatchToProps = dispatch => {
    return {
        removeFromFavourites: dish => dispatch(removeFromFavourites(dish)),
    }
}

const Card = (props) => {
    return (
        <Pressable onLongPress={() => alert("Pressed")}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: props.item.image }} />
                <View style={styles.details}>
                    <Text style={styles.title}>{props.item.name}</Text>
                </View>
            </View >
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: '#FEFEED',
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

export default connect(null, mapDispatchToProps)(Card);
