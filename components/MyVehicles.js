import React from "react";
import { Card, ListItem } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const MyVehicles = () => {
    const cars = [
        {
            name: "ВР 4355 СА",
            avatar:
                "https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c46e.png",
            car_type: "Мотор"
        },
        {
            name: "ВР 4355 СА",
            avatar:
                "https://www.stickpng.com/assets/images/580b585b2edbce24c47b2cf2.png",
            car_type: "Мотор"
        },
        {
            name: "ВР 4355 СА",
            avatar:
                "https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-9-logo-png-transparent.png"
        }
    ];
    return (
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
    );
};

const AppNavigator = createStackNavigator({
    MyVehicles: {
        screen: MyVehicles
    }
});

export default createAppContainer(AppNavigator);
