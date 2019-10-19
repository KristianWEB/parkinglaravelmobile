import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./components/Home";
import MyVehicles from "./components/MyVehicles";

const MainNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    MyVehicles: {
        screen: MyVehicles
    },
    headerMode: "none"
});

const App = createAppContainer(MainNavigator);

export default App;
