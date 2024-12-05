import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ListTaskScreen, AddTaskScreen } from 'screens';
import { TaskProvider } from 'utils';

const Stack = createStackNavigator();

const App = () => {
  return (
    <TaskProvider>
      <Stack.Navigator initialRouteName="listar">
        <Stack.Screen name="listar" component={ListTaskScreen} />
        <Stack.Screen name="adicionar" component={AddTaskScreen} />
      </Stack.Navigator>
    </TaskProvider>
  );
};

export default App;
