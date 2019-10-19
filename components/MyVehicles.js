import React from "react";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";
import { Card, ListItem } from "react-native-elements";

const MyVehicles = () => {
    const cars = [
        {
            name: "Я 6652 ВН",
            avatar:
                "https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-9-logo-png-transparent.png"
        }
    ];
    return (
        <View style={{ flex: 1 }}>
            <Card containerStyle={{ padding: 0 }}>
                {cars.map((u, i) => {
                    return (
                        <ListItem
                            key={i}
                            title={u.name}
                            leftAvatar={{ source: { uri: u.avatar } }}
                            subtitle={u.subtitle}
                            bottomDivider
                        />
                    );
                })}
            </Card>
            <View
                style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    marginBottom: 36
                }}
            >
                <Button
                    icon={<Icon name="plus-circle" size={20} color="white" />}
                    iconleft
                    title=" Добави"
                    titleStyle={{
                        fontSize: 20
                    }}
                    buttonStyle={{
                        borderRadius: 6,
                        width: "100%",
                        position: "absolute",
                        bottom: 0
                    }}
                />
            </View>
        </View>
    );
};

export default MyVehicles;
