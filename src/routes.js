import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import ClassList, {ClassListNavigationOptions} from './pages/ClassList';
import Class, {ClassNavigationOptions} from './pages/Class';
import Image, {ImagePageNavigationOptions} from './pages/Image';

import Welcome from './pages/Welcome';
import Journey from './pages/Journey';

import {Login, LoginNavigationOptions} from './pages/Login';
import {Glossary, GlossaryNavigationOptions} from './pages/Glossary';
import {
  WordDescription,
  WordDescriptionNavigationOptions,
} from './pages/WordDescription';

import Community from './pages/Community';
import Profile from './pages/Profile';

const TabNavigator = createBottomTabNavigator({
  Home: Welcome,
  Jornada: Journey,
  Glossary: Glossary,
  Community: Community,
  Profile: Profile,
});

const config = {
  initialRouteName: 'Login',
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
  Login: {
    screen: Login,
    navigationOptions: LoginNavigationOptions,
  },
  // Glossary: {
  //   screen: Glossary,
  //   navigationOptions: GlossaryNavigationOptions,
  // },
  WordDescription: {
    screen: WordDescription,
    navigationOptions: WordDescriptionNavigationOptions,
  },
};

const App = createStackNavigator(routes, config);

const Routes = createAppContainer(App);

export default Routes;
