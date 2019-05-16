import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Moment from 'moment';
import Cell from './Cell';

class WeatherDetail extends Component {
    convertDateFormat(dateTime) {
      Moment.locale('en');
      return (
        Moment(dateTime).format('DD MMM YYYY, ddd')
      );
    }

    render() {
      const dateTime = this.props.dateTime;
      const weatherDataArr = this.props.weatherData;
      const weatherCondition = weatherDataArr[0].weather[0].main;

      const { imageStyle, dateTimeTextStyle, humidityTextStyle, weatherTextStyle } = styles;

      const sortedArr = weatherDataArr.sort((a, b) => a.main.humidity - b.main.humidity);
      const minHumidity = sortedArr[0].main.humidity;
      const maxHumidity = sortedArr[sortedArr.length - 1].main.humidity;

      return (
          <Cell>
            <View>
              <Text style={dateTimeTextStyle}>{dateTime}</Text>
              <Text style={humidityTextStyle}>{minHumidity} - {maxHumidity}</Text>
              <Text style={weatherTextStyle}>{weatherCondition}</Text>
            </View>

            <View>
              <Image 
                style={imageStyle}
                source={require('../../rightArrow.png')}
              />
            </View>
          </Cell>      
      );
    }
}

const styles = {
  imageStyle: {
    height: 15,
    width: 15
  },
  dateTimeTextStyle: {
      fontWeight: 'bold',
      marginBottom: 2.5,
      marginTop: 2.5
  },
  humidityTextStyle: {
      fontWeight: '400',
      marginBottom: 2.5,
      marginTop: 2.5
  },
  weatherTextStyle: {
      color: 'gray',
      fontWeight: '500',
      marginBottom: 2.5,
      marginTop: 2.5
  }
};

export default WeatherDetail;
