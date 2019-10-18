import React from "react";
import { View, Text } from "react-native";
import { Button, Header, Avatar, Card } from "react-native-elements";

const Home = () => {
    return (
        <View>
            <Header
                placement="left"
                leftComponent={{ icon: "menu", color: "#fff" }}
                centerComponent={{
                    text: "Natasha Petkova",
                    style: { color: "#fff" }
                }}
            >
                <Avatar
                    rounded
                    source={{
                        uri:
                            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                />
            </Header>
            <Button
                buttonStyle={{
                    marginLeft: 25,
                    marginRight: 25,
                    marginTop: 125,
                    padding: 75,
                    borderRadius: 15
                }}
                color="#fff"
                title="Моите превозни средства"
            ></Button>
            <Button
                buttonStyle={{
                    marginLeft: 25,
                    marginRight: 25,
                    marginTop: 25,
                    padding: 75,
                    borderRadius: 15,
                    backgroundColor: "#512da8"
                }}
                title="Плати паркинг"
            ></Button>
        </View>
    );
};

export default Home;
