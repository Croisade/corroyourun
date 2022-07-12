import {COLORS} from '@/components/theme'
import {doRegister, setSessionStatusToIdle} from '@/redux/sessionSlice'
import {useNavigation} from '@react-navigation/native'
import {Formik} from 'formik'
import React, {useEffect} from 'react'
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import * as Yup from 'yup'
import CustomButton from '../Common/Button'

export default function SignUpScreen() {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  // @ts-ignore
  const sessionStatus = useSelector(state => state.session.status)

  useEffect(() => {
    if (sessionStatus === 'succeeded') {
      dispatch(setSessionStatusToIdle())
      navigation.navigate('SignIn')
    }
  }, [sessionStatus, navigation, dispatch])

  const onRegisterPress = () => {
    console.warn('Sign in')

    navigation.navigate('ConfirmEmail')
  }

  const onCreateAccountPress = () => {
    console.warn('create account')

    navigation.navigate('SignIn')
  }

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  })
  let content
  if (sessionStatus === 'loading') {
    content = (
      <>
        <ActivityIndicator />
      </>
    )
  } else {
    content = (
      <View style={styles.root}>
        <Text style={styles.title}>Create Account</Text>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={SignupSchema}
          onSubmit={(values, {setSubmitting}) => {
            dispatch(
              doRegister({email: values.email, password: values.password}),
            )
            setSubmitting(false)
          }}>
          {({
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            values,
          }) => (
            <View style={{width: '80%'}}>
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
              <Text style={styles.text}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
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
    )
  }

  return <ScrollView>{content}</ScrollView>
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
  error: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#FD8D75',
  },
})
