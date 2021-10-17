import React from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  View,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import Colors from '../constants/Colors';
import FormInput from '../components/FormInput';
import CustomAppButton from '../components/CustomAppButton';
const ForgotPasswordScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <Image
        style={styles.img}
        source={require('../assets/img/forgot_password.png')}
      />
      <Text style={styles.text}>Şifremi Unuttum</Text>
      <Text style={styles.description}>
        Şifrenizi kurtarmak için kayıtlı olduğunuz mail adresinizi giriniz
        ardından size gönderilen maildeki onay linkine tıklayınız.
      </Text>
      <View style={styles.form}>
        <FormInput
          header="Email Adresiniz:"
          placeholder="example@mail.com"
          leftIcon={
            <Icon
              name="envelope"
              type="font-awesome"
              color={Colors.iconColor}
              style={styles.icon}
            />
          }
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomAppButton
          title="Yeni Şifre Gönder"
          onClick={() => navigation.navigate('NewPassword')}
        />
      </View>
    </SafeAreaView>
  );
};

ForgotPasswordScreen.navigationOptions = {
  headerShown: true,
  headerTitle: () => (
    <View style={{flex: 1, alignItems: 'center', marginLeft: -70}}>
      <Image source={require('../assets/img/tinyLogo.png')} />
    </View>
  ),
  headerTintColor: Colors.lightTextColor,

  headerStyle: {
    backgroundColor: Colors.backgroundColor,
    elevation: 0,
  },
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  img: {
    marginTop: 30,
    alignSelf: 'center',
  },
  text: {
    fontSize: 26,
    fontFamily: 'Roboto-Medium',
    alignSelf: 'center',
    color: Colors.lightTextColor,
    marginTop: 30,
  },
  description: {
    color: '#ccc',
    fontSize: 16,
    fontFamily: 'Roboto Regular',
    marginTop: 10,
    textAlign: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  form: {
    marginTop: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default ForgotPasswordScreen;
