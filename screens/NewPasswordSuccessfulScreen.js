import React from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import CustomAppButton from '../components/CustomAppButton';
import Colors from '../constants/Colors';
const NewPasswordSuccessfulScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('../assets/img/emailReceive.png')}
        />
        <Text style={styles.text}>
          Yeni şifren e-mail adresine gönderildi. Tekrar giriş yaparak şifrenizi
          değiştirmeyi unutmayınız.
        </Text>
        <CustomAppButton
          title="Giriş Yap"
          onClick={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

NewPasswordSuccessfulScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
    flex: 0.7,
  },

  main: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    marginTop: 30,
    alignSelf: 'center',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Roboto-Regular',
    alignSelf: 'center',
    color: Colors.lightTextColor,
    marginTop: 30,
    textAlign: 'center',
  },
});

export default NewPasswordSuccessfulScreen;
