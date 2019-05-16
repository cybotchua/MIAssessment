import React, { Component } from 'react';
import { View } from 'react-native';
import HomePage from './components/HomePage';
import { Header } from './components/common';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
              <Header headerText="Singapore, Singapore" />
              <HomePage />
            </View>
        );
    }
}

export default App;
