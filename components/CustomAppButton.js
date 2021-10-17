import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../constants/Colors';
const CustomAppButton = props => {
  return (
    <Button
      buttonStyle={styles.buttonStyle}
      containerStyle={styles.button}
      title={props.title}
      type={props.type}
      onPress={props.onClick}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    width: 170,
    backgroundColor: Colors.primaryButtonColor,
    overflow: 'hidden',
    marginRight: 10,
    marginLeft: 10,
  },
  buttonStyle: {
    backgroundColor: Colors.primaryButtonColor,
  },
});

export default CustomAppButton;
