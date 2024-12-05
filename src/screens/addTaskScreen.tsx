import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { useTaskContext } from 'utils';
import { ITasks, RootStackParamList } from 'interfaces';

interface AddTaskScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'listar'>;
}

export const AddTaskScreen = ({ navigation }: AddTaskScreenProps) => {
  const { addTask } = useTaskContext();
  const [text, setText] = useState('');

  const handleAddTask = () => {
    const newTask: ITasks = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    console.log(text);
    addTask(newTask);
    navigation.goBack();
  };

  return (
    <View style={styles.view}>
      <TextInput
        placeholder="Digite a tarefa"
        value={text}
        onChangeText={setText}
        style={styles.textInput}
      />
      <Button title="Adicionar Tarefa" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});
