import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import ClassList, {ClassListNavigationOptions} from './pages/ClassList';
import Class, {ClassNavigationOptions} from './pages/Class';
import Image, {ImagePageNavigationOptions} from './pages/Image';

import Welcome from './pages/Welcome';
import Journey from './pages/Journey';

const TabNavigator = createBottomTabNavigator({
  Home: Welcome,
  Jornada: Journey,
});

const config = {
  initialRouteName: 'Main',
  mode: 'card',
};

const routes = {
  Main: {
    screen: TabNavigator,
    navigationOptions: {header: null},
  },
  ClassList: {
    screen: ClassList,
    navigationOptions: ClassListNavigationOptions,
  },
  Class: {
    screen: Class,
    navigationOptions: ClassNavigationOptions,
  },
  Image: {
    screen: Image,
    navigationOptions: ImagePageNavigationOptions,
  },
};

const App = createStackNavigator(routes, config);

const Routes = createAppContainer(App);

export default Routes;
