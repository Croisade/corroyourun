import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../images/logo.png';
import CustomInput from '../Common/CustomInput';
import CustomButton from '../Common/Button';
import {useNavigation} from '@react-navigation/native';

export default function SettingsScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn('Sign in');
    //validation user

    navigation.navigate('Home');
  };

  const onForgotPasswordPress = () => {
    console.warn('forgot password');

    navigation.navigate('ForgotPassword');
  };

  const onCreateAccountPress = () => {
    console.warn('create Account');

    navigation.navigate('SignUp');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={(styles.logo, {height: height * 0.3})}
          resizeMode="contain"
        />
        <CustomInput
          value={username}
          setValue={setUsername}
          placeHolder={'username'}
          secureTextEntry={false}
        />
        <CustomInput
          value={password}
          setValue={setPassword}
          placeHolder={'password'}
          secureTextEntry={true}
        />
        <CustomButton
          onPress={onSignInPressed}
          text={'Log In'}
          type={'PRIMARY'}
        />
        <CustomButton
          onPress={onForgotPasswordPress}
          text={'Forgot Password?'}
          type={'TERTIARY'}
        />
        <CustomButton
          onPress={onCreateAccountPress}
          text={"Don't have an account? Sign Up Today!"}
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
});
