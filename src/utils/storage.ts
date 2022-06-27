import AsyncStorage from '@react-native-async-storage/async-storage'

const set = (key: string | [string, string][], value: string) => {
  if (typeof key === 'string') {
    return AsyncStorage.setItem(key, value)
  }
  return AsyncStorage.multiSet(key)
}
const get = (key: string) => AsyncStorage.getItem(key)
const remove = (key: string) => AsyncStorage.removeItem(key)
const clear = () => AsyncStorage.clear()
const setJSON = (key: string, value: any) =>
  AsyncStorage.setItem(key, JSON.stringify(value))
const getJSON = async (key: string) => {
  const value = (await AsyncStorage.getItem(key)) || '{}'
  return JSON.parse(value) || {}
}

const storage = {
  set,
  get,
  clear,
  remove,
  setJSON,
  getJSON,
}

export default storage
