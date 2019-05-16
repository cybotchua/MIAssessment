import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Moment from 'moment';
import WeatherDetail from './WeatherDetail';

class WeatherList extends Component {
  state = { weathers: [] };

  componentWillMount() {
      axios.get('http://api.openweathermap.org/data/2.5/forecast?id=1880252&APPID=a09d6c6e32ca8a5108a996418c20c60d').then(response => this.setState({ weathers: response.data.list }));
  }

  convertDateFormat(dateTime) {
    Moment.locale('en');
    return (
      Moment(dateTime).format('DD MMM YYYY')
    );
  }

  renderWeathers() {
    const weathersFromState = this.state.weathers;
    const weathers = weathersFromState.reduce((weathersSoFar, { dt_txt, main, weather }) => {
      Moment.locale('en');
      const dateTime = Moment(dt_txt).format('DD MMM YYYY, ddd');

      const weatherDict = {
        main,
        weather,
        dateTime
      };
          
      (weathersSoFar[dateTime] = weathersSoFar[dateTime] || []).push(weatherDict);
      return weathersSoFar;
    }, {});

    return Object.keys(weathers).map(key =>
      <WeatherDetail key={key} dateTime={key} weatherData={weathers[key]} />
    );
  }

  render() {
    return (
      <ScrollView style={styles.scrollViewStyle}>
        {this.renderWeathers()}
      </ScrollView>
    );
  }
}

const styles = {
  scrollViewStyle: {
    marginTop: 10
  }
};

export { WeatherList };
