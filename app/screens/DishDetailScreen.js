import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from '../components/Icon';
import { connect } from 'react-redux';
import { addToFavourites } from '../redux/actionCreators';

const mapStateToProps = state => {
    return {
        favourites: state.favourites,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToFavourites: (dish) => dispatch(addToFavourites(dish))
    }
}

const DishDetailScreen = (props) => {

    const dish = props.route.params.dish


    const isFavourite = props.favourites.some(item => item.id === dish.id);


    const markFavourite = dish => {
        if (isFavourite) {
            alert('You already added this item  to favourite')
        }
        else {
            props.addToFavourites(dish)
        }
    }

    let iconName = "ios-heart-outline"
    if (isFavourite) {
        iconName = "ios-heart-sharp"
    }

    return (
        <View style={styels.container}>
            {dish.image && <Image
                style={styels.image}

                source={{ uri: dish.image }} />}
            <View style={styels.details}>
                <Icon name={iconName} color="#7ECC49" size={35} iconStyle={{ paddingY: 10 }} action={() => markFavourite(dish)} />
                {/* <Text style={styels.name}>{dish.name}</Text> */}
                < Text style={styels.description} >{dish.description}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(DishDetailScreen)
