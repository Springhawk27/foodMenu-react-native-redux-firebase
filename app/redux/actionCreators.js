import axios from 'axios';
import * as actionTypes from './actionTypes';

export const loadDishes = dishes => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes,
    }
}

export const getDishes = () => dispatch => {
    axios.get("https://foodmenu-3936c-default-rtdb.firebaseio.com/dishes.json   ")
        .then(response => dispatch(loadDishes(response.data)))
        .catch(err => console.log(err))
}


export const addToFavourites = dish => {
    return {
        type: actionTypes.ADD_TO_FAVOURITES,
        payload: dish,
    }
}

export const removeFromFavourites = dish => {
    return {
        type: actionTypes.REMOVE_FAVOURITES,
        payload: dish,
    }
}