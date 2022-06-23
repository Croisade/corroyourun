import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {COLORS} from '@/components/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MonthYearSelector({
  text,
  onPressUp,
  onPressDown,
}: {
  text: string | number;
  onPressUp: () => void;
  onPressDown: () => void;
}) {
  return (
    <View style={styles.root}>
      <Pressable onPress={onPressUp}>
        <Icon name="chevron-up" size={40} color="#900" />
      </Pressable>
      <View style={styles.card}>
        <Text style={styles.text}>{text}</Text>
      </View>

      <Pressable onPress={onPressDown}>
        <Icon name="chevron-down" size={40} color="#900" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {alignItems: 'center', justifyContent: 'center'},
  text: {
    color: COLORS.text,
    fontWeight: 'bold',
    marginTop: 5,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: COLORS.muted,
    width: 100,
    height: 30,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
