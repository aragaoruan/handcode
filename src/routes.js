import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Welcome from './pages/Welcome';
import Journey from './pages/Journey';

const TabNavigator = createBottomTabNavigator({
  Home: Welcome,
  Jornada: Journey,
});

export default createAppContainer(TabNavigator);
