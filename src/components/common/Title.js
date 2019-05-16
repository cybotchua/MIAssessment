import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import Moment from 'moment';

class Title extends Component {
    state = { currentWeatherCondition: '', humidity: 0 };

    componentWillMount() {
        axios.get('http://api.openweathermap.org/data/2.5/weather?id=1880252&APPID=a09d6c6e32ca8a5108a996418c20c60d').then(response => this.setState({ currentWeatherCondition: response.data.weather[0].main, humidity: response.data.main.humidity }));
    }

    render() {        
        const currentWeatherCondition = this.state.currentWeatherCondition;
        const humidity = this.state.humidity;

        Moment.locale('en');
        const currentDateTime = Moment().format('ddd, DD MMM YYYY LT Z');
        
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.dateTimeTextStyle}>{currentDateTime}</Text>
                <Text style={styles.humidityTextStyle}>{humidity}</Text>
                <Text style={styles.weatherTextStyle}>{currentWeatherCondition}</Text>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
      alignItems: 'center',
      paddingTop: 20 
    },
    dateTimeTextStyle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5,
        paddingTop: 5
    },
    humidityTextStyle: {
        color: 'black',
        fontSize: 40,
        fontWeight: '400',
        paddingBottom: 5,
        paddingTop: 5
    },
    weatherTextStyle: {
        fontSize: 25,
        color: 'gray',
        fontWeight: '500',
        paddingBottom: 5,
        paddingTop: 5
    }
};

export { Title };
