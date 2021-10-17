import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

import {Input, Icon} from 'react-native-elements';
const FormInput = props => {
  return (
    <>
      <Text style={styles.formText}>{props.header}</Text>
      <Input
        inputContainerStyle={styles.inputContainerStyle}
        placeholder={props.placeholder}
        leftIcon={props.leftIcon}
        rightIcon={props.rightIcon}
        secureTextEntry={props.securePass}
      />
    </>
  );
};
const styles = StyleSheet.create({
  inputContainerStyle: {
    backgroundColor: Colors.onboardButtonColor,
    borderRadius: 20,
  },
  formText: {
    color: Colors.lightTextColor,
    fontFamily: 'Roboto-Regular',
    fontSize: 22,
    marginLeft: 20,
    marginTop: 10,
  },
});

export default FormInput;
