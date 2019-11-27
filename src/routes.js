import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Welcome from './pages/Welcome';
import Journey from './pages/Journey';
import Community from './pages/Community';
import Profile from './pages/Profile';

const TabNavigator = createBottomTabNavigator({
  // Home: Welcome,
  // Jornada: Journey,
  // Comunidade: Community,
  Perfil: Profile,
});

export default createAppContainer(TabNavigator);
