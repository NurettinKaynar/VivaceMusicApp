import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';

import Colors from '../constants/Colors';
import FormInput from '../components/FormInput';
import CustomAppButton from '../components/CustomAppButton';
const LoginScreen = ({navigation}) => {
  const [hidePass, setHidePass] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor={Colors.backgroundColor} />
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.header}>Giriş Yap</Text>
        <View style={styles.formContainer}>
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
          <FormInput
            header="Şifreniz:"
            placeholder="Şifrenizi Girin"
            leftIcon={
              <Icon
                name="lock"
                type="font-awesome"
                color={Colors.iconColor}
                style={styles.icon}
              />
            }
            rightIcon={
              <Icon
                name={hidePass ? 'eye' : 'eye-slash'}
                size={24}
                type="font-awesome"
                color={Colors.iconColor}
                iconStyle={styles.iconRight}
                onPress={() => setHidePass(!hidePass)}
              />
            }
            securePass={hidePass ? true : false}
          />
        </View>
        <View style={styles.createAccount}>
          <Text style={styles.account}>Hesabın Yok Mu?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('CreateAccount');
            }}>
            <Text style={styles.link}>Hemen Kaydol</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            <Text style={styles.forgetPassword}>Şifremi Unuttum</Text>
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <CustomAppButton title="Öğretmen Girişi" />
          <CustomAppButton title="Giriş Yap" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
LoginScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  icon: {
    marginLeft: 15,
  },
  iconRight: {
    marginRight: 15,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  logo: {
    width: 200,
    height: 250,
    alignSelf: 'center',
  },
  header: {
    color: Colors.lightTextColor,
    paddingTop: 20,
    fontSize: 32,
    alignSelf: 'center',
    fontFamily: 'Roboto-Medium',
  },
  formContainer: {
    flex: 1,
  },

  input: {
    backgroundColor: Colors.onboardButtonColor,
    color: Colors.lightTextColor,
  },
  account: {
    color: Colors.lightTextColor,
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
  },
  link: {
    color: Colors.onboardButtonColor,
    fontFamily: 'Roboto-Medium',
    marginLeft: 5,
  },
  createAccount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 220,
    flex: 0.8,
    marginLeft: 10,
  },
  forgetPassword: {
    color: Colors.lightTextColor,
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    marginLeft: 60,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;
