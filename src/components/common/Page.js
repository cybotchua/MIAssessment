import React from 'react';
import { View } from 'react-native';

const Page = (props) => {
    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
  containerStyle: {
    flex: 1
  }
};

export { Page };
