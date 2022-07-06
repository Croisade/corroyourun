import * as React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  Pressable,
  Button,
} from 'react-native'
import {COLORS} from '../theme'

import CommunityLinks from '@/components/Settings/CommunityLinks'
import {RegisterResponse} from '@/api/api'
import {useState} from 'react'
import {Formik} from 'formik'
import {updateAccount} from '@/api/account'

export default function ProfileScreen({route}) {
  const [modalPressedFN, setModalPressedFN] = useState(false)
  const [modalPressedLN, setModalPressedLN] = useState(false)
  const {accountInfo}: {accountInfo: RegisterResponse} = route.params

  function switchModalFn() {
    return (
      <Modal transparent={true} visible={modalPressedFN}>
        <Formik
          initialValues={{firstName: ''}}
          onSubmit={(values, {setSubmitting}) => {
            updateAccount(values.firstName)
            setModalPressedFN(false)
            setSubmitting(false)
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <TextInput
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
              />

              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
      </Modal>
    )
  }

  function switchModalLn() {
    return (
      <Modal transparent={true} visible={modalPressedLN}>
        <Formik
          initialValues={{lastName: ''}}
          onSubmit={(values, {setSubmitting}) => {
            updateAccount(values.lastName)
            setModalPressedLN(false)
            setSubmitting(false)
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <TextInput
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
              />

              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
      </Modal>
    )
  }

  const handleFirstNamePress = () => {
    setModalPressedFN(true)
    switchModalFn()
  }
  const handleLastNamePress = () => {
    setModalPressedFN(true)
    switchModalLn()
  }

  return (
    <View style={styles.root}>
      <View style={{paddingLeft: 10}}>
        <Text style={styles.header}>Profile</Text>

        <Text style={[styles.text]}>Email</Text>
        <Text style={[styles.smallText]}>{accountInfo.email} </Text>

        <Text style={[styles.text]}>First Name</Text>
        <Pressable onPress={handleFirstNamePress}>
          <Text style={[styles.smallText]}>
            {accountInfo.firstName
              ? accountInfo.firstName
              : 'Set your first name!'}
          </Text>
        </Pressable>

        <Text style={[styles.text]}>Last Name</Text>
        <Pressable onPress={handleLastNamePress}>
          <Text style={[styles.smallText]}>
            {accountInfo.lastName
              ? accountInfo.lastName
              : 'Set your last name!'}
          </Text>
        </Pressable>

        <View style={styles.horizontalRule} />
        <CommunityLinks />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.background,
    height: '100%',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: COLORS.text,
    paddingBottom: 34,
    paddingTop: 15,
  },
  text: {
    color: COLORS.text,
    // marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 7,
  },
  smallText: {
    color: COLORS.text,
    marginBottom: 7,
  },
  horizontalRule: {
    paddingTop: 10,
    borderBottomColor: COLORS.muted,
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  footer: {
    color: COLORS.text,
    marginBottom: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
})
