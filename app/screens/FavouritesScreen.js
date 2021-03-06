import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Card from '../components/Card';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        favourites: state.favourites,
    }
}

const FavouritesScreen = (props) => {
    return (
        <View>
            <FlatList
                data={props.favourites}
                renderItem={({ item }) => <Card item={item}></Card>}
                keyExtractor={item => item.id.toString()}
            >

            </FlatList>
        </View>
    )
}

export default connect(mapStateToProps)(FavouritesScreen)
