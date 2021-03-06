import {getAccount} from '@/api/account'
import {RegisterResponse} from '@/api/api'
import CommunityLinks from '@/components/Settings/CommunityLinks'
import {COLORS} from '@/components/theme'
import {resetAccount} from '@/redux/accountSlice'
import {resetRun} from '@/redux/runSlice'
import {resetSession} from '@/redux/sessionSlice'
import {clearAccountId} from '@/utils/account'
import {clearJWT} from '@/utils/session'
import React, {useEffect, useState} from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import {useDispatch} from 'react-redux'

export default function SettingsScreen({navigation}) {
  const dispatch = useDispatch()

  const [accountInfo, setAccountInfo] = useState<RegisterResponse>({
    accountId: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    refreshToken: '',
    createdAt: {
      T: 0,
      I: 0,
    },
    updatedAt: {
      T: 0,
      I: 0,
    },
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const account = await getAccount()

        setAccountInfo(account.data)
      } catch (err) {
        console.log(err.response.data)
      }
    }

    fetchData()
  }, [])

  function signOut() {
    clearJWT()
    clearAccountId()
    dispatch(resetAccount())
    dispatch(resetRun())
    dispatch(resetSession())
    navigation.navigate('SignIn')
  }

  return (
    <View style={styles.root}>
      <View style={{paddingLeft: 10}}>
        <Text style={styles.header}>Settings</Text>
        <Pressable
          onPress={() => navigation.navigate('Profile', {accountInfo})}>
          <Text style={[styles.text, {fontSize: 20, fontWeight: 'bold'}]}>
            Profile
          </Text>
          <Text style={styles.text}>{accountInfo.email}</Text>
        </Pressable>

        <Text onPress={signOut} style={{color: 'red'}}>
          Sign Out
        </Text>
        <View style={styles.horizontalRule} />

        <Text
          style={[
            styles.text,
            {fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 7},
          ]}>
          Support
        </Text>
        <CommunityLinks />
      </View>
      <View>
        <View style={styles.horizontalRule} />
        <Text style={styles.footer}>Version 1655474877</Text>
        <Text style={styles.footer}>?? CorroYouRun - All Rights Reserved</Text>
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
    marginBottom: 20,
  },
  horizontalRule: {
    paddingTop: 10,
    borderBottomColor: COLORS.muted,
    borderBottomWidth: 2,
  },
  footer: {
    color: COLORS.text,
    marginBottom: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
})
