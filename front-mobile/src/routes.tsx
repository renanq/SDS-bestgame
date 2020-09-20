import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import Home from './pages/Home';
import CreateRecord from './pages/CreateRecord';
import Feedback from './pages/Feedback';

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="CreateRecord" component={CreateRecord}/>
                <Stack.Screen name="Feedback" component={Feedback}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;