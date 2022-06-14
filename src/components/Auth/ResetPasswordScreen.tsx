import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import CustomInput from './CustomInput';
import CustomButton from './LoginButton';

export default function SignUpScreen() {
  const [password, setPassword] = useState('');
  const [emailConfirmationCode, setEmailConfirmationCode] = useState('');
  const navigation = useNavigation();

  const onConfirmPasswordPress = () => {
    console.warn('Sign in');

    navigation.navigate('SignIn');
  };

  const onSendEmailCodePress = () => {
    console.warn('Sign in');

    navigation.navigate('NewPassword');
  };

  const onReturnToLoginPress = () => {
    console.warn('create account');

    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>
        <CustomInput
          value={password}
          setValue={setPassword}
          placeHolder={'Password'}
          secureTextEntry={true}
        />
        <CustomInput
          value={emailConfirmationCode}
          setValue={setEmailConfirmationCode}
          placeHolder={'Confirmation Code'}
          secureTextEntry={false}
        />
        <CustomButton
          onPress={onConfirmPasswordPress}
          text={'Confirm Password'}
          type={'PRIMARY'}
        />

        <CustomButton
          onPress={onSendEmailCodePress}
          text={'Resend Email'}
          type={'SECONDARY'}
        />
        <CustomButton
          onPress={onReturnToLoginPress}
          text={'Have an account? Log in!'}
          type={'TERTIARY'}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'grey',
  },
  link: {
    color: '#FD8D75',
  },
});
