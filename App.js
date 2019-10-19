import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderBackButton } from "react-navigation-stack";
import Home from "./components/Home";
import MyVehicles from "./components/MyVehicles";
import PayParking from "./components/PayParking";
import Payment from "./components/Payment";
const MainNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    MyVehicles: {
        screen: MyVehicles,
        navigationOptions: {
            headerTitle: "Моите превозни средства"
        }
    },
    PayParking: {
        screen: PayParking,
        navigationOptions: {
            headerTitle: "Сканирай QR код"
        }
    },
    Payment: {
        screen: Payment,
        navigationOptions: {
            headerTitle: "Плати паркинг"
        }
    }
});

const App = createAppContainer(MainNavigator);

export default App;
