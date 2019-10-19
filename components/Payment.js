import React, { useState } from "react";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Picker, Text } from "react-native";
import { Video } from "expo-av";
import vid from "../assets/payment.mp4";

const Payment = () => {
    const [car, setCar] = useState("");
    const [minutes, setMinutes] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.8)"
            }}
        >
            <Text style={{ textAlign: "center", fontSize: 20 }}>
                Избери превозно средство
            </Text>
            <Picker
                selectedValue={car}
                onValueChange={itemValue => setCar(itemValue)}
            >
                <Picker.Item label="Избери" />
                <Picker.Item label="Я 6652 ВН" value="1" />
            </Picker>
            <Text style={{ textAlign: "center", fontSize: 20, marginTop: 35 }}>
                Избери време
            </Text>
            <Picker
                selectedValue={minutes}
                onValueChange={itemValue => setMinutes(itemValue)}
            >
                <Picker.Item label="Избери" />
                <Picker.Item label="30 Минути" value="30" />
                <Picker.Item label="60 Минути" value="60" />
                <Picker.Item label="120 Минути" value="120" />
            </Picker>
            <View
                style={{
                    flex: 1,
                    justifyContent: "flex-end"
                }}
            >
                {loading === false && (
                    <Button
                        icon={
                            <Icon name="plus-circle" size={20} color="white" />
                        }
                        iconleft
                        title=" Направи плащане "
                        titleStyle={{
                            fontSize: 20
                        }}
                        buttonStyle={{
                            borderRadius: 6,
                            width: "100%",
                            position: "absolute",
                            bottom: 0
                        }}
                        onPress={() => setLoading(true)}
                    />
                )}
                {loading === true && (
                    <Video
                        source={vid}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="contain"
                        shouldPlay
                        isLooping
                        style={{
                            aspectRatio: 1,
                            width: "100%",
                            marginTop: 50,
                            alignSelf: "flex-end"
                        }}
                    />
                )}
            </View>
        </View>
    );
};

export default Payment;
