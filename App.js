import React from 'react';
//import { Text, View, StyleSheet, ImageBackground, Image, Button } from 'react-native';
import { StackNavigator} from 'react-navigation';
import Books from './components/Books';
import Home from './components/Home'


const Navigator = StackNavigator({
   Home:{screen:Home},
   Books: { screen: Books }
 
});
class App extends React.Component {
  render() {
     return (
          <Navigator /> 
     );
  }
}
 
export default App;
