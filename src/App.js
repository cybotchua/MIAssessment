import React, { Component } from 'react';
import { View } from 'react-native';
import HomePage from './components/HomePage';
import { Header } from './components/common';
import moment from 'moment-timezone';

class App extends Component {
    render() {
        var timeZone = moment.tz.guess();

        return (
            <View style={{ flex: 1 }}>
              <Header headerText={timeZone} />
              <HomePage />
            </View>
        );
    }
}

export default App;
