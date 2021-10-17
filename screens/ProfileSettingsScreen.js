import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Colors from '../constants/Colors';
import TinyLogo from '../assets/img/tinyLogo.png';
import RightArrow from '../assets/img/right-two.png';
import AvatarImage from '../assets/img/testAvatar.png';
import IconPen from '../assets/img/icon-pen.png';
import {Input} from 'react-native-elements';
const ProfileSettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.arrow} source={RightArrow} />
        <Image style={styles.tinyLogo} source={TinyLogo} />
      </View>
      <View style={styles.profileCard}>
        <View style={styles.ProfilePic}>
          <Image style={styles.avatarImage} source={AvatarImage} />
          <Image style={styles.profileIcon} source={IconPen} />
        </View>
        <View style={styles.profileDesc}>
          <Text style={styles.altText}>Adınız Soyadınız</Text>
          <View style={styles.editProfile}>
            <Text style={styles.name}>Gözde ÇAKIR </Text>
            <Image style={styles.editIcon} source={IconPen} />
          </View>
          <View
            style={{
              borderBottomColor: 'gray',
              width: 300,
              borderWidth: 1,
              marginVertical: 2,
            }}
          />
          <Text style={styles.account}>Premium Hesap </Text>
        </View>
      </View>
      <View style={styles.accountInfo}>
        <Text style={[{marginHorizontal: 10, ...styles.headerTitle}]}>
          Hesap Bilgilerim
        </Text>
        <View
          style={{
            borderColor: '#fff',
            backgroundColor: '#fff',
            width: 450,
            alignSelf: 'center',
            borderWidth: 1,
            marginVertical: 10,
          }}
        />
        <Text style={[{marginHorizontal: 20, ...styles.headerTitle}]}>
          Email Adresiniz
        </Text>
        <Input
          inputStyle={{marginLeft: 30}}
          inputContainerStyle={{
            backgroundColor: Colors.onboardButtonColor,
            borderRadius: 20,
          }}
          placeholder="example@mail.com"
          onChangeText=""
          value=""
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    flexDirection: 'row',
    flex: 0.1,
  },
  arrow: {
    width: 32,
    height: 32,
    marginHorizontal: 30,
  },
  tinyLogo: {
    width: 75,
    height: 17,
    marginVertical: 5,
    marginHorizontal: 80,
  },
  profileCard: {
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: '#FFDEDD',
    width: '95%',
    height: 100,
    borderRadius: 24,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
  },
  ProfilePic: {
    position: 'relative',
  },
  avatarImage: {
    // position: 'relative',
    width: 64,
    height: 64,
    marginHorizontal: 10,
  },
  profileIcon: {
    position: 'absolute',
    width: 20,
    height: 22,
    top: 45,
    left: 55,
  },
  profileDesc: {},
  altText: {
    color: 'gray',
  },
  name: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
  },
  editProfile: {
    display: 'flex',
    flexDirection: 'row',
  },
  editIcon: {
    width: 20,
    height: 22,
    left: 165,
  },
  account: {
    color: Colors.premiumColor,
  },
  headerTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
    color: Colors.lightTextColor,
    marginTop: 10,
  },
});

export default ProfileSettingsScreen;
