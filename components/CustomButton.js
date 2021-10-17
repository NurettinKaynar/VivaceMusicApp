import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';

const CustomButton = props => {
  return (
    <Button
      buttonStyle={styles.buttonStyle}
      containerStyle={styles.buttonContainer}
      titleStyle={styles.titleStyle}
      title={props.buttonTitle}
      onPress={props.onSelect}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    backgroundColor: Colors.onboardButtonColor,
  },
  titleStyle: {
    fontFamily: 'Roboto-medium',
    color: Colors.darkTextColor,
  },
  buttonContainer: {
    overflow: 'hidden',
    borderRadius: 17,
  },
});

export default CustomButton;
