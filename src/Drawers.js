import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabs from "./Tabs";

const Drawer = createDrawerNavigator();

function Drawers() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Tabs}/>
            <Drawer.Screen name="Settings" component={Tabs}/>
            <Drawer.Screen name="Preferences" component={Tabs}/>
        </Drawer.Navigator>
    );
};
export default Drawers
