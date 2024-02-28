import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/Home";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import SettingsScreen from "./screens/Settings";
import PreferenceScreen from "./screens/Preferences";

const Tab = createBottomTabNavigator();

const Tabs = ({route}) => {
    let initialTab;

    switch (route.name) {
        case 'Settings':
            initialTab = 'SettingsTab';
            break;
        case 'Preferences':
            initialTab = 'PreferencesTab';
            break;
        default:
            initialTab = 'HomeTab';
    }

    return (
        <Tab.Navigator initialRouteName={initialTab}>
            <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home" color={color} size={size}/>,
                }}
            />
            <Tab.Screen
                name="SettingsTab"
                component={SettingsScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="cog" color={color} size={size}/>,
                }}
            />
            <Tab.Screen
                name="PreferencesTab"
                component={PreferenceScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Preferences',
                    tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="star" color={color} size={size}/>,
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
