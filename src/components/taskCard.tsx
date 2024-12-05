import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { ITasks, TToggleTaskStatus } from 'interfaces';

interface TaskCardProps {
  task: ITasks;
  toggleTaskStatus: TToggleTaskStatus;
  deleteTask: TToggleTaskStatus;
}

export const TaskCard = ({
  task,
  toggleTaskStatus,
  deleteTask,
}: TaskCardProps) => {
  const validationFinishTask = {
    done: 'Tarefa concluida',
    progress: 'Tarefa em andamento',
    ready: 'Tarefa aguardando ser iniciada',
  };

  const validationProgressTask = {
    done: 'Colocar tarefa para aguardar',
    progress: 'Concluir Tarefa',
    ready: 'Começar tarefa',
  };

  const validationColorTask = {
    done: '#216e4e',
    progress: '#0055cc',
    ready: '#fec76f',
  };

  const styles = StyleSheet.create({
    view: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      gap: 10,
    },
    textAlert: {
      color: validationColorTask[task.completed],
    },
  });

  return (
    <View style={styles.view}>
      <View style={styles.view}>
        <Text>{task.text}</Text>
        <Text style={styles.textAlert}>
          {validationFinishTask[task.completed]}
        </Text>
      </View>
      <View style={styles.view}>
        <TouchableOpacity onPress={() => deleteTask(task.id)}>
          <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleTaskStatus(task.id)}>
          <Text>{validationProgressTask[task.completed]}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
