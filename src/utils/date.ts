import {Runs} from '@/components/Runs/Runs'
import {COLORS} from '@/components/theme'
import flowRight from 'lodash/flowRight'

export const fromUnixToDateString = (unix: number) => {
  return new Date(unix * 1000).toDateString()
}

export const fromIsoToDateString = (date: string) => {
  return new Date(date).toDateString()
}

export const fromUnixToISOString = (unix: number) => {
  return new Date(unix * 1000).toISOString()
}

export const getYearMonthDay = (string: string) => {
  return string.slice(0, 10)
}

const getMarkedCalendarDates = flowRight(getYearMonthDay)

// @TODO dates should come from backend

export const getDatesAndRunIds = (runs: Runs[]) => {
  return runs.reduce((pv, cv: Runs) => {
    return {
      ...pv,
      ...{
        [getMarkedCalendarDates(cv.createdAt)]: {
          marked: true,
          dotColor: COLORS.primary,
        },
      },
    }
  }, {})
}
