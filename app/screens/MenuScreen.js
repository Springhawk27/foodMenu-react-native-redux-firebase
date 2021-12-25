import React, { useEffect } from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import { getDishes } from '../redux/actionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDishes: () => dispatch(getDishes())
    }
}

const MenuScreen = (props) => {

    useEffect(() => {
        props.getDishes();
    }, []);

    // console.log(props)
    return (
        <View >
            {/* <Text>Menu Screen</Text>
            <Button onPress={() => props.navigation.navigate('Dish Detail')} title="Press" ></Button > */}
            <FlatList

                data={props.dishes}
                renderItem={({ item }) => (<MenuItem item={item} selectDish={() => props.navigation.navigate("Dish Detail", { dish: item })}></MenuItem>)
                }
                keyExtractor={item => item.id.toString()}
            >

            </FlatList >
        </View >
    )
}





export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
