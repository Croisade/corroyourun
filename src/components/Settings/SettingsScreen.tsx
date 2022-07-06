import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import {COLORS} from '@/components/theme'
import URLText from '@/components/Common/URlText'
import CommunityLinks from '@/components/Settings/CommunityLinks'
import {URL} from '@/constants'
import {getAccount} from '@/api/account'
import {RegisterResponse} from '@/api/api'
import {clearJWT} from '@/utils/session'
import {clearAccountId} from '@/utils/account'
import {useDispatch, useSelector} from 'react-redux'
import {resetRun} from '@/redux/runSlice'
import {resetSession} from '@/redux/sessionSlice'
import {resetAccount} from '@/redux/accountSlice'

export default function SettingsScreen({navigation}) {
  const dispatch = useDispatch()

  const state = useSelector(state => state)
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
      const account = await getAccount()
      setAccountInfo(account.data)
    }

    fetchData()
  }, [])

  function signOut() {
    clearJWT()
    clearAccountId()
    dispatch(resetAccount())
    dispatch(resetRun())
    dispatch(resetSession())
    console.log(state)
    navigation.navigate('SignIn')
  }

  return (
    <View style={styles.root}>
      <View style={{paddingLeft: 10}}>
        <Text style={styles.header}>Settings</Text>
        <Text
          style={[styles.text, {fontSize: 20, fontWeight: 'bold'}]}
          onPress={() => navigation.navigate('Profile', {accountInfo})}>
          Profile
        </Text>
        <URLText text={accountInfo.email} url={URL.issues} />
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
        <Text style={styles.footer}>© CorroYouRun - All Rights Reserved</Text>
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
