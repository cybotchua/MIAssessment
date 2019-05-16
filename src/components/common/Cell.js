import React from 'react';
import { View } from 'react-native';

const Cell = (props) => {
    return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
    );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
};

export default Cell;
