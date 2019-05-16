import React, { Component } from 'react';
import { } from 'react-native';
import { Page, WeatherList, Title } from './common';

class HomePage extends Component {
    render() {
        return (
            <Page>
                <Title />
                <WeatherList />
            </Page>
        );
    }
}

export default HomePage;
