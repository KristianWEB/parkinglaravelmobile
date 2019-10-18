import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import MyVehicles from "./components/MyVehicles";

export default function App() {
    return (
        <View>
            <Home />
            <MyVehicles />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
