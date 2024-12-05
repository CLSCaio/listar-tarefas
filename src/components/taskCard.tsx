import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { ITasks, TToggleTaskStatus } from 'interfaces';

interface TaskCardProps {
  task: ITasks;
  toggleTaskStatus: TToggleTaskStatus;
}

export const TaskCard = ({ task, toggleTaskStatus }: TaskCardProps) => {
  const styles = StyleSheet.create({
    view: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
    textAlert: {
      color: task.completed ? '#216e4e' : '#0055cc',
      marginLeft: 4,
    },
  });

  return (
    <View style={styles.view}>
      <View style={styles.view}>
        <Text>{task.text}</Text>
        <Text style={styles.textAlert}>
          {task.completed ? 'Tarefa concluida' : 'Tarefa em andamento'}
        </Text>
      </View>
      <TouchableOpacity onPress={() => toggleTaskStatus(task.id)}>
        <Text>{task.completed ? 'Continuar Tarefa' : 'Concluir Tarefa'}</Text>
      </TouchableOpacity>
    </View>
  );
};
