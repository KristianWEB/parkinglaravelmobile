import React from "react";
import { Card, ListItem} from 'react-native-elements'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from "react-native";
import { Card, ListItem } from "react-native-elements";


const MyVehicles = () => {
    const cars = [
        {
            name:'ВР 4355 СА',
            avatar: 'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c46e.png',
            car_type: 'Мотор'
        },
        {
            name: 'СА 2165 ВН',
            avatar: 'https://www.stickpng.com/assets/images/580b585b2edbce24c47b2cf2.png',
            car_type: 'Мотор'
        },{
            name: 'Я 6652 ВН',
            avatar: 'https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-9-logo-png-transparent.png'
        },
        {
            name: 'Я 6652 ВН',
            avatar: 'https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-9-logo-png-transparent.png'
        },{
            name: 'Я 6652 ВН',
            avatar: 'https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-9-logo-png-transparent.png'
        },{
            name: 'Я 6652 ВН',
            avatar: 'https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-9-logo-png-transparent.png'
        },{
            name: 'Я 6652 ВН',
            avatar: 'https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-9-logo-png-transparent.png'
        },{
            name: 'Я 6652 ВН',
            avatar: 'https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-9-logo-png-transparent.png'
        },{
            name: 'Я 6652 ВН',
            avatar: 'https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-9-logo-png-transparent.png'
        },{
            name: 'Я 6652 ВН',
            avatar: 'https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-9-logo-png-transparent.png'
        },
        ,{
            name: 'Я 6652 ВН',
            avatar: 'https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-9-logo-png-transparent.png'
        },
    ]
    return (
        <View>
            <Card containerStyle={{padding: 0}} >
                {
                    cars.map((u, i) => {
                        return (
                            <ListItem
                                key={i}
                                title={u.name}
                                leftAvatar={{ source: { uri: u.avatar} }}
                                subtitle={u.subtitle}
                                bottomDivider
                            />

                        );
                    })
                }
            </Card>
            <Button
                icon={
                    <Icon
                        name="plus-circle"
                        size={20}
                        color="white"
                    />
                }
                iconleft
                title=" Добави"
                titleStyle={{
                    fontSize: 20
                }}
                buttonStyle={{
                    margin:15,
                    borderRadius:6,
                    height:60,
                }}
            />
        </View>
    );
};

export default MyVehicles;