import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './Pages/Login';
import Home from './Pages/Home';

const routes = createAppContainer(
    createStackNavigator(
        {
            Login,
            Home,
        },
        {
            headerMode: 'none'
        }
    )
);


export default routes;