import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../Common/CustomInput';
import CustomButton from '../Common/Button';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [emailConfirmationCode, setEmailConfirmationCode] = useState('');
  const navigation = useNavigation();

  const onSendPress = () => {
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
          value={email}
          setValue={setEmail}
          placeHolder={'Email'}
          secureTextEntry={true}
        />
        <CustomButton onPress={onSendPress} text={'Send'} type={'PRIMARY'} />
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
