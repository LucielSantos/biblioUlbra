import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Pages/Home';

const routes = createAppContainer(
    createStackNavigator(
        {
            Home,
        },
        {
            headerMode: 'none'
        }
    )
);


export default routes;