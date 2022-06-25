import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import {Formik} from 'formik';
import {COLORS} from '@/components/theme';
import CustomInput from '../Common/CustomInput';
import CustomButton from '../Common/Button';

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
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            navigation.navigate('ConfirmEmail');
            console.log(values);
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={{width: '80%'}}>
              <Text style={styles.text}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text style={styles.text}>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
              />
              <CustomButton
                onPress={handleSubmit}
                text="Register"
                type="PRIMARY"
              />
            </View>
          )}
        </Formik>

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
    color: COLORS.text,
    margin: 10,
  },
  input: {
    width: '100%',
    borderColor: COLORS.highlight,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    color: COLORS.text,
  },
  text: {
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#FD8D75',
  },
});
