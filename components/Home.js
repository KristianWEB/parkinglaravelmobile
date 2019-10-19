import React from "react";
import { View, Text } from "react-native";
import { Button, Header, Avatar, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

const Home = props => {
    return (
        <View>
            <Header
                placement="left"
                leftComponent={{ icon: "menu", color: "#fff" }}
                centerComponent={{
                    text: "Ivan Petrov",
                    style: { fontWeight: "700", fontSize: 22 }
                }}
                containerStyle={{
                    paddingTop: 25,
                    backgroundColor: "#fff"
                }}
            >
                <Avatar
                    rounded
                    source={{
                        uri: "https://randomuser.me/api/portraits/men/17.jpg"
                    }}
                    size={42}
                />
            </Header>
            <Button
                buttonStyle={{
                    marginLeft: 25,
                    marginRight: 25,
                    marginTop: 50,
                    paddingTop: 75,
                    paddingBottom: 75,
                    paddingLeft: 50,
                    paddingRight: 50,
                    borderRadius: 15
                }}
                titleStyle={{
                    fontSize: 23,
                    fontWeight: "700"
                }}
                icon={<Icon name="credit-card" size={125} color="white" />}
                color="#fff"
                title="Моите превозни средства"
                onPress={() => props.navigation.navigate("MyVehicles")}
                linearGradientProps={{
                    colors: ["#00c6ff", "#0072ff"],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 }
                }}
                iconCenter
            ></Button>
            <Button
                buttonStyle={{
                    marginLeft: 25,
                    marginRight: 25,
                    marginTop: 50,
                    paddingTop: 75,
                    paddingBottom: 75,
                    paddingLeft: 50,
                    paddingRight: 70,
                    borderRadius: 15
                }}
                titleStyle={{
                    fontSize: 23,
                    fontWeight: "700"
                }}
                icon={<Icon name="car-side" size={125} color="white" />}
                color="#fff"
                title="Заплати паркинг място"
                onPress={() => props.navigation.navigate("MyVehicles")}
                linearGradientProps={{
                    colors: ["#38ef7d", "#11998e"],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 }
                }}
                iconCenter
            ></Button>
        </View>
    );
};

export default Home;
