import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import URLText from '../Common/URlText'
import {COLORS} from '../theme'

import {URL} from '@/constants'
import CommunityLinks from '@/components/Settings/CommunityLinks'

export default function ProfileScreen() {
  return (
    <View style={styles.root}>
      <View style={{paddingLeft: 10}}>
        <Text style={styles.header}>Profile</Text>

        <Text style={[styles.text]}>Email</Text>
        <URLText text={'test@email.com'} url={URL.issues} />

        <Text style={[styles.text]}>First Name</Text>
        <URLText text={'Jamal'} url={URL.issues} />

        <Text style={[styles.text]}>Last Name</Text>
        <URLText text={'Gardiner'} url={URL.issues} />

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
