// import {createAppContainer} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';

// import Welcome from './pages/Welcome';
// import Journey from './pages/Journey';
// import Login from './pages/Login';

// const TabNavigator = createBottomTabNavigator({
//   Home: Login,
//   Jornada: Journey,
// });

// export default createAppContainer(TabNavigator);

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import colors from './styles/colors';

const config = {
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    headerTitle: 'Login ',
    headerStyle: {
      backgroundColor: colors.primary.color,
    },
    headerTintColor: colors.primary.textColor,
    headerTitleStyle: {
      fontWeight: 'normal',
    },
    headerBackTitle: null,
  },
  mode: 'card',
};

import {Login, LoginNavigationOptions} from './pages/Login';
import {Glossary, GlossaryNavigationOptions} from './pages/Glossary';
import {
  WordDescription,
  WordDescriptionNavigationOptions,
} from './pages/WordDescription';

const routes = {
  Login: {
    screen: Login,
    navigationOptions: LoginNavigationOptions,
  },
  Glossary: {
    screen: Glossary,
    navigationOptions: GlossaryNavigationOptions,
  },
  WordDescription: {
    screen: WordDescription,
    navigationOptions: WordDescriptionNavigationOptions,
  },
};

const App = createStackNavigator(routes, config);

const Routes = createAppContainer(App);

export default Routes;
