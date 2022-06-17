import React, {useCallback, useMemo, useState} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {
  Calendar,
  CalendarList,
  Agenda,
  CalendarProps,
} from 'react-native-calendars';
import CustomInput from '@/components/Common/CustomInput'

export default function CalendarScreen() {
  // const INITIAL_DATE = Date.now().toString();
  const INITIAL_DATE = '2020-02-02';
  const [selected, setSelected] = useState(INITIAL_DATE);

  const onDayPress: CalendarProps['onDayPress'] = useCallback(day => {
    console.log(day.dateString)
    setSelected(day.dateString);
  }, []);

  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: 'orange',
        selectedTextColor: 'red',
      },
    };
  }, [selected]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: 'bold',
          color: 'black',
          alignSelf: 'center',
        }}>
        Calendar!
      </Text>

{/* <CustomInput value={"test"} setValue={}/> */}

      <Calendar
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={months => {
          console.log('now these months are visible', months);
        }}
        current={INITIAL_DATE}
        onDayPress={onDayPress}
        markedDates={marked}
        // Max amount of months allowed to scroll to the past. Default = 50
        // pastScrollRange={5}
        // // Max amount of months allowed to scroll to the future. Default = 50
        // futureScrollRange={5}
        // // Enable or disable scrolling of calendar list
        // scrollEnabled={true}
        // // Enable or disable vertical scroll indicator. Default = false
        // showScrollIndicator={true}
        //
        //
        //
        // Initially visible month. Default = now
        // initialDate={'2012-03-01'}
        // initialDate={}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2012-05-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2027-05-30'}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={day => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={false}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        // renderArrow={direction => <Arrow />}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={false}
        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={true}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={subtractMonth => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={false}
        // Disable right arrow. Default = false
        disableArrowRight={false}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        // Replace default month and year title with custom one. the function receive a date as parameter
        // renderHeader={date => {
        /*Return JSX*/
        // }}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: '#fff',
    // padding: 20,
    // margin: 10,
  },
});
