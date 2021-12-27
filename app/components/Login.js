
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImage from '../../App/images/backgroundImageLogin.jpeg';
import { trySignUp } from '../../App/redux/actionCreators';
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => {
    return {
        trySignUp: (email, password) => dispatch(trySignUp(email, password))
    }
}

const Login = props => {
    const [authStates, setAuthStates] = useState({
        mode: "login",
        inputs: {
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    const switchViews = () => {
        setAuthStates({
            ...authStates,
            mode: authStates.mode === "login" ? "signup" : "login",
            inputs: {
                email: "",
                password: "",
                confirmPassword: "",
            }
        })
    }

    const updateInputs = (value, name) => {
        setAuthStates({
            ...authStates,
            inputs: {
                ...authStates.inputs,
                [name]: value
            }
        })
    }
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const handleAuth = () => {
        const email = authStates.inputs.email;
        const password = authStates.inputs.password;
        const confirmPassword = authStates.inputs.confirmPassword;

        if (email !== "" && password !== "") {
            if (re.test(email)) {
                if (authStates.mode === "login") {
                    props.navigation.navigate("Home");
                } else {
                    if (password === confirmPassword) {
                        props.trySignUp(email, password);

                        props.navigation.navigate("Home");
                    } else {
                        alert("Password fields doesn't Match!");
                    }
                }
            } else {
                alert("Invalid Email!");
            }
        } else {
            alert("Input all the fields!")
        }

    }

    let confirmPassField = null;
    if (authStates.mode === "signup") {
        confirmPassField = (
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={authStates.inputs.confirmPassword}
                onChangeText={value => updateInputs(value, "confirmPassword")}
            />
        );
    }
    return (
        <ImageBackground
            source={backgroundImage}
            style={{ width: "100%", flex: 1 }}
            blurRadius={5}>
            <View style={styles.loginView}>

                <TextInput
                    style={styles.input}
                    placeholder="Your Email Address"
                    value={authStates.inputs.email}
                    onChangeText={value => updateInputs(value, "email")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={authStates.inputs.password}
                    onChangeText={value => updateInputs(value, "password")}
                />
                {confirmPassField}
                <TouchableOpacity style={styles.btnContainer}
                    onPress={() => {
                        handleAuth()
                    }}>
                    <Text style={styles.btnStyle}>{authStates.mode === "login" ? "Login" : "Sign Up"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnContainer2}
                    onPress={
                        () => switchViews()
                    }
                >
                    <Text style={styles.btnStyle2}>{authStates.mode === "login" ? "Switch to Sign Up" : "Switch to Login"}</Text>
                </TouchableOpacity>
            </View >
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    loginView: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        width: "75%",
        padding: 10,
        marginTop: 10,
        backgroundColor: "#F1FEFD",
        borderWidth: 1,
        borderColor: "#7ECC49",
        borderRadius: 4
    },
    btnStyle: {
        fontSize: 16,
        color: "#fff",
        alignSelf: "center"
    },
    btnStyle2: {
        fontSize: 16,
        color: "#317CE9",
        alignSelf: "center",
        textDecorationLine: 'underline'

    },
    btnContainer: {
        flexDirection: "row",
        width: 150,
        paddingVertical: 10,
        backgroundColor: "#7ECC49",
        borderRadius: 5,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    btnContainer2: {
        flexDirection: "row",
        width: 150,
        paddingVertical: 10,
        // backgroundColor: "#B4FCAB",
        borderRadius: 5,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        // width: "75%"
    }
})


export default connect(null, mapDispatchToProps)(Login);