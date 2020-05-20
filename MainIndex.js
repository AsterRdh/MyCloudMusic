import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import App from './App';
import TopMusic from './TopMusic';
import MusicPlayer from './MusicPlayer';
import {View, Text} from 'react-native';

let Stack = createStackNavigator();

export default class MainIndex extends Component {
  constructor(props) {
    super(props);
  }
  _showHomePage = () => {
    return <App />;
  };
  _showTopMusicPage = ({navigation}) => {
    return <TopMusic MusicNavigation={navigation} />;
  };
  _showMusicPlayerPage = (navigation) => {
    return <MusicPlayer MusicNavigation={navigation} />;
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="TopMusic" options={{ title: '音乐排行' }} component={this._showTopMusicPage} />
            <Stack.Screen name="MusicPlayer" options={{headerShown:false}} component={this._showMusicPlayerPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
