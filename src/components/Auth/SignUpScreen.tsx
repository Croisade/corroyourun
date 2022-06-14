import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from './CustomInput';
import CustomButton from './LoginButton';

export default function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation();
  const onRegisterPress = () => {
    console.warn('Sign in');

    navigation.navigate('ConfirmEmail');
  };

  const onCreateAccountPress = () => {
    console.warn('create account');

    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create Account</Text>
        <CustomInput
          value={username}
          setValue={setUsername}
          placeHolder={'Username'}
          secureTextEntry={false}
        />
        <CustomInput
          value={password}
          setValue={setPassword}
          placeHolder={'Password'}
          secureTextEntry={true}
        />
        <CustomInput
          value={email}
          setValue={setEmail}
          placeHolder={'Email'}
          secureTextEntry={true}
        />
        <CustomButton
          onPress={onRegisterPress}
          text={'Register'}
          type={'PRIMARY'}
        />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link}>Terms of Use</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
        <CustomButton
          onPress={onCreateAccountPress}
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
