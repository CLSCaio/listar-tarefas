import AsyncStorage from '@react-native-async-storage/async-storage';

import { ITasks } from 'interfaces';

export const setTaskData = async (key: string, value: ITasks[]) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error saving data', e);
  }
};

export const getTaskData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log(value);
    return value ? value : null;
  } catch (e) {
    console.error('Error getting data', e);
  }
};
