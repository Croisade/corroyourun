import {useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native'
import {Formik} from 'formik'
import CustomInput from '../Common/CustomInput'
import CustomButton from '../Common/Button'
import {COLORS} from '@/components/theme'

export default function SignUpScreen() {
  const [password, setPassword] = useState('')
  const [emailConfirmationCode, setEmailConfirmationCode] = useState('')
  const navigation = useNavigation()

  const onConfirmPasswordPress = () => {
    console.warn('Sign in')

    navigation.navigate('SignIn')
  }

  const onSendEmailCodePress = () => {
    console.warn('Sign in')

    navigation.navigate('NewPassword')
  }

  const onReturnToLoginPress = () => {
    console.warn('create account')

    navigation.navigate('SignIn')
  }

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>

        <Formik
          initialValues={{password: '', confirmationCode: ''}}
          onSubmit={values => {
            navigation.navigate('SignIn')
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={{width: '80%'}}>
              <Text style={styles.text}>New Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.password}
              />
              <Text style={styles.text}>Confirmation Code</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.confirmationCode}
              />
              <CustomButton
                onPress={handleSubmit}
                text="Confirm Password"
                type="PRIMARY"
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
          )}
        </Formik>
      </View>
    </ScrollView>
  )
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
  link: {
    color: '#FD8D75',
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
})
