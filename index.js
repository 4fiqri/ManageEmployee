/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import App2 from './App2'
// import TabNav from './tabNav';
// import DrawerNav from './drawerNav';
import { StackContainer } from './src/routes/stackRoot'
import {name as appName} from './app.json';
import EditEmployee from './src/screens/EditEmployeeScreen'
AppRegistry.registerComponent(appName, () => App );
