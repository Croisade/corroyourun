import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import {COLORS} from '@/components/theme'
import URLText from '@/components/Common/URlText'
import CommunityLinks from '@/components/Settings/CommunityLinks'
import {URL} from '@/constants'

export default function SettingsScreen({navigation}) {
  return (
    <View style={styles.root}>
      <View style={{paddingLeft: 10}}>
        <Text style={styles.header}>Settings</Text>
        <Text
          style={[styles.text, {fontSize: 20, fontWeight: 'bold'}]}
          onPress={() => navigation.navigate('Profile')}>
          Profile
        </Text>
        <URLText text={'test@email.com'} url={URL.issues} />
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
