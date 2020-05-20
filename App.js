/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <View>
          <TextInput />
        </View>
        <Text>qweqe</Text>
      </View>
    );
  }
}
