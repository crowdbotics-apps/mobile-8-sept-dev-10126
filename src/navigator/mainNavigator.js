import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile310567Navigator from '../features/UserProfile310567/navigator';
import BlankScreen410566Navigator from '../features/BlankScreen410566/navigator';
import BlankScreen310565Navigator from '../features/BlankScreen310565/navigator';
import BlankScreen210564Navigator from '../features/BlankScreen210564/navigator';
import BlankScreen110556Navigator from '../features/BlankScreen110556/navigator';
import BlankScreen010555Navigator from '../features/BlankScreen010555/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile310567: { screen: UserProfile310567Navigator },
BlankScreen410566: { screen: BlankScreen410566Navigator },
BlankScreen310565: { screen: BlankScreen310565Navigator },
BlankScreen210564: { screen: BlankScreen210564Navigator },
BlankScreen110556: { screen: BlankScreen110556Navigator },
BlankScreen010555: { screen: BlankScreen010555Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
