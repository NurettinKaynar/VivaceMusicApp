import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import Colors from '../constants/Colors';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomAppButton from '../components/CustomAppButton';
import {SwipeablePanel} from 'rn-swipeable-panel';
import UserLicense from '../components/UserLicense';
import auth from '@react-native-firebase/auth';
const CreateAccountScreen = props => {
  const [hidePass, setHidePass] = useState(true);
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [mailValid, setMailValid] = useState(false);

  const __doSignUp = () => {
    if (!mail) {
      Alert.alert('Error', 'Email required *');
      return;
    } else if (!password && password.trim() && password.length > 6) {
      Alert.alert('Error', 'Weak password, minimum 6 chars');
      return;
    } else if (!checked) {
      Alert.alert(
        'Kullancı Sözleşmesi',
        'Lütfen kullanıcı sözleşmesini onaylayınız.',
      );
    } else {
      __doCreateUser(mail, password);
      return;
    }
  };
  const __doCreateUser = async () => {
    try {
      let res = await auth()
        .createUserWithEmailAndPassword(mail, password)
        .then(res => {
          console.log('Kullanıcı Oluşturuldu', res);
          res.user.updateProfile({
            displayName: name,
          });
        });
      if (res) {
        console.log(res);
        Alert.alert('Hoşgeldiniz', 'Uygulamaya başarıyla giriş yaptınız');
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert(
          'Kullanıcı zaten mevcut',
          'Bu kullanıcı kayıtlı lütfen giriş yapmayı deneyin ',
        );
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert(
          'Mail Adresi Hatalı',
          'E-Posta aderisini hatalı girdiniz lütfen tekrar deneyin',
        );
      }

      // console.error(error);
    }
  };

  function validate(text) {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setMail(text);
      Alert.alert(
        'E-Posta adresi yanlış!',
        'E-posta adresiniz hatalı lütfen tekrar deneyin.',
      );
    } else {
      setMail(text);
    }
  }

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
    setChecked(true);
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.header}>Kaydol</Text>
        <View style={styles.formContainer}>
          <Text style={styles.formText}>Adınız:</Text>
          <Input
            inputStyle={{marginLeft: 30}}
            inputContainerStyle={{
              backgroundColor: Colors.onboardButtonColor,
              borderRadius: 20,
            }}
            placeholder="Adınızı Giriniz"
            onChangeText={value => setName(value)}
            value={name}
          />
          <Text style={styles.formText}>Soyadınız:</Text>
          <Input
            inputStyle={{marginLeft: 30}}
            inputContainerStyle={{
              backgroundColor: Colors.onboardButtonColor,
              borderRadius: 20,
            }}
            placeholder="Soyadınızı Giriniz"
            onChangeText={setLastName}
            value={lastName}
          />
          <Text style={styles.formText}>Email Adresiniz:</Text>
          <Input
            inputStyle={{marginLeft: 30}}
            inputContainerStyle={{
              backgroundColor: Colors.onboardButtonColor,
              borderRadius: 20,
            }}
            placeholder="example@mail.com"
            onChangeText={text => validate(text)}
            value={mail}
          />
          <Text style={styles.formText}>Şifreniz:</Text>
          <Input
            inputStyle={{marginLeft: 30}}
            inputContainerStyle={{
              backgroundColor: Colors.onboardButtonColor,
              borderRadius: 20,
            }}
            placeholder="Şifreniz"
            onChangeText={value => setPassword(value)}
            value={password}
            rightIcon={
              <Icon
                style={{marginRight: 20}}
                name={hidePass ? 'eye' : 'eye-slash'}
                size={24}
                color="black"
                onPress={() => setHidePass(!hidePass)}
              />
            }
            secureTextEntry={hidePass ? true : false}
          />
        </View>
        <View style={styles.login}>
          <Text style={styles.loginText}>Zaten bir hesabın var mı?</Text>
          <Pressable
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            <Text style={styles.link}>Giriş Yap</Text>
          </Pressable>
        </View>
        <View style={styles.acceptAgr}>
          <Icon
            raised
            name={checked ? 'check-circle' : 'circle'}
            type="font-awesome"
            color={Colors.iconColor}
            onPress={() => setChecked(!checked)}
            size={22}
          />
          <Pressable onPress={openPanel}>
            <Text style={styles.kabul}>Kullanıcı Sözleşmesini</Text>
          </Pressable>
          <Text style={styles.loginText}>okudum onaylıyorum</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomAppButton title="Kaydol" onClick={__doSignUp} />
        </View>
        <SwipeablePanel
          {...panelProps}
          isActive={isPanelActive}
          fullWidth={true}
          allowTouchOutside={false}
          closeIconStyle={{backgroundColor: Colors.backgroundColor}}
          barStyle={{backgroundColor: Colors.backgroundColor}}>
          <UserLicense />
        </SwipeablePanel>
      </ScrollView>
    </SafeAreaView>
  );
};

CreateAccountScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.backgroundColor,
  },
  logo: {
    width: 126,
    height: 164,
    alignSelf: 'center',
  },
  header: {
    color: Colors.lightTextColor,
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 10,
  },
  formContainer: {
    flex: 1,
    marginTop: 20,
  },
  formText: {
    fontSize: 24,
    fontFamily: 'Roboto-Regular',
    color: Colors.lightTextColor,
    marginLeft: 20,
  },
  loginText: {
    color: Colors.lightTextColor,
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
  },
  link: {
    color: Colors.onboardButtonColor,
    fontFamily: 'Roboto-Medium',
    marginLeft: 5,
  },
  login: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginTop: -10,
  },
  acceptAgr: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  kabul: {
    color: Colors.onboardButtonColor,
    marginLeft: 10,
    marginRight: 5,
  },
});

export default CreateAccountScreen;
