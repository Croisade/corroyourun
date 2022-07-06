import React, {useEffect, useState} from 'react'
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Text,
  ActivityIndicator,
} from 'react-native'
import CustomButton from '../Common/Button'
import {COLORS} from '@/components/theme'
import {useNavigation} from '@react-navigation/native'
import {Formik} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {login, setSessionStatusToIdle} from '@/redux/sessionSlice'
import {getAccount, setAccountStatusToIdle} from '@/redux/accountSlice'
import {showMessage} from 'react-native-flash-message'

export default function SettingsScreen() {
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const sessionStatus = useSelector(state => state.session.status)
  const sessionError = useSelector(state => state.session.error)
  const state = useSelector(state => state)
  const {height} = useWindowDimensions()
  const navigation = useNavigation()

  const onSignInPressed = () => {
    console.warn('Sign in')
    //validation user

    navigation.navigate('Home')
  }

  const onForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword')
  }

  const onCreateAccountPress = () => {
    navigation.navigate('SignUp')
  }

  useEffect(() => {
    if (sessionStatus === 'succeeded') {
      console.log('email', email)
      dispatch(getAccount(email))
      dispatch(setAccountStatusToIdle())
      dispatch(setSessionStatusToIdle())
      navigation.navigate('Home')
    }
    if (sessionStatus === 'failed') {
      showMessage({
        message: 'Failed to login:',
        description: sessionError,
        type: 'danger',
      })
      dispatch(setAccountStatusToIdle())
      dispatch(setSessionStatusToIdle())
    }
  }, [sessionStatus])

  let content
  if (sessionStatus === 'loading') {
    content = (
      <>
        <ActivityIndicator />
      </>
    )
  } else {
    content = (
      <ScrollView>
        <View style={[styles.root, {height: height}]}>
          {/* <Image
          source={Logo}
          style={(styles.logo, {height: height * 0.3})}
          resizeMode="contain"
        /> */}

          <View style={styles.top}>
            <Text style={styles.logoPlaceholder}>CorroYouRun</Text>
          </View>

          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values, {setSubmitting}) => {
              // navigation.navigate('Home')
              setEmail(values.email)
              dispatch(login({email: values.email, password: values.password}))
              setSubmitting(false)
            }}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View style={styles.form}>
                <Text style={styles.text}>Username</Text>
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
                  text={'Log In'}
                  type={'PRIMARY'}
                />
              </View>
            )}
          </Formik>

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
    )
  }

  return <>{content}</>
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.background,
    height: '10%',
    flex: 1,
  },
  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 200,
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
  form: {
    paddingTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
  top: {
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#CC4C33',
    borderWidth: 5,
    maxHeight: 75,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoPlaceholder: {
    color: '#CC4C33',
    fontWeight: 'bold',
    fontSize: 20,
  },
})
