import React, {useCallback, useMemo, useState} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {
  Calendar,
  CalendarList,
  Agenda,
  CalendarProps,
} from 'react-native-calendars';
import CustomInput from '@/components/Common/CustomInput';
import {COLORS} from '../theme';

import MonthYearSelector from '@/components/Calendar/MonthYearSelector';

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.background,
    height: '100%',
    flexDirection: 'column',
    flexGrow: 1,
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
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  card: {
    backgroundColor: COLORS.muted,
    width: 100,
    height: 30,
    borderRadius: 10,
  },
});

export default function CalendarScreen() {
  // const INITIAL_DATE = Date.now().toString();
  const INITIAL_DATE = '2020-02-02';
  const [selected, setSelected] = useState(INITIAL_DATE);
  const monthFull = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const Year = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [monthIncrement, setMonthIncrement] = useState<number>(0);
  const [yearIncrement, setYearIncrement] = useState<number>(0);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [date] = useState(new Date());

  const onDayPress: CalendarProps['onDayPress'] = useCallback(day => {
    console.log(day.dateString);
    setSelected(day.dateString);
  }, []);

  // const date = new Date();
  const handleChevronUpPressMonth = () => {
    console.log(monthIncrement);
    setMonthIncrement(monthIncrement + 1);

    const updatedDate = new Date(date.setMonth(date.getMonth() + 1));

    setMonth(updatedDate.getMonth());
    setCurrentDate(updatedDate);
  };

  const handleChevronDownPressMonth = () => {
    setMonthIncrement(monthIncrement - 1);

    const updatedDate = new Date(date.setMonth(date.getMonth() - 1));

    setMonth(updatedDate.getMonth());
    setCurrentDate(updatedDate);
  };

  const handleChevronUpPressYear = () => {
    setYearIncrement(yearIncrement + 1);
    const updatedYear = date.getFullYear() + 1;
    date.setFullYear(updatedYear);
    setYear(updatedYear);
    setCurrentDate(date);
  };

  const handleChevronDownPressYear = () => {
    setYearIncrement(yearIncrement - 1);
    const updatedYear = date.getFullYear() - 1;
    date.setFullYear(updatedYear);
    setYear(updatedYear);
    setCurrentDate(date);
  };

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
    <View style={styles.root}>
      <Text style={styles.header}>Calendar</Text>

      <View style={{flexDirection: 'row', marginBottom: 37}}>
        <View style={{flex: 1}}>
          <MonthYearSelector
            text={monthFull[month]}
            date={date}
            setDate={setMonth}
            increment={monthIncrement}
            setIncrement={setMonthIncrement}
            onPressUp={handleChevronUpPressMonth}
            onPressDown={handleChevronDownPressMonth}
          />
        </View>

        <View style={{flex: 1}}>
          <MonthYearSelector
            text={year}
            date={date}
            setDate={setYear}
            increment={yearIncrement}
            setIncrement={setYearIncrement}
            onPressUp={handleChevronUpPressYear}
            onPressDown={handleChevronDownPressYear}
          />
        </View>
      </View>

      {/* <CustomInput value={"test"} setValue={}/> */}
      <Calendar
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={months => {
          console.log('now these months are visible', months);
        }}
        key={currentDate + ''}
        current={currentDate.toString()}
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
        monthFormat={'MMMM yyyy'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={monthss => {
          console.log('month changed', monthss);
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={true}
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
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={subtractMonth => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={true}
        // Disable right arrow. Default = false
        disableArrowRight={true}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        // Replace default month and year title with custom one. the function receive a date as parameter
        // renderHeader={date => {
        /*Return JSX*/
        // }}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={false}
        style={{
          borderWidth: 1,
          borderTopColor: COLORS.muted,
          borderBottomColor: 'transparent',
          height: '100%',
        }}
        theme={{
          backgroundColor: COLORS.background,
          calendarBackground: COLORS.background,
          selectedDayBackgroundColor: COLORS.background,
          textSectionTitleColor: 'black',
        }}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'space-between',
//     backgroundColor: '#fff',
//     // padding: 20,
//     // margin: 10,
//   },
// });
