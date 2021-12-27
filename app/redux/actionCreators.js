import axios from 'axios';
import * as actionTypes from './actionTypes';
import { navigate } from '../../App';

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


export const authUser = () => {
    return {
        type: actionTypes.AUTHENTICATE_USER
    }
}

export const trySignUp = (email, password) => dispatch => {
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCR9BZ1Je3xg8y0mTzpc4nH9fHjmyB0cLk", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .catch(err => {
            console.log(err);
            alert("Authentication Failed!");
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error.message);
            } else {
                navigate("Home");
                dispatch(authUser());
            }
            console.log(data)
        })

}