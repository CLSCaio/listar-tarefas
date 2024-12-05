import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
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
    done: 'Concluida',
    progress: 'Em andamento',
    ready: 'Aguardando',
  };

  const validationProgressTask = {
    done: 'Aguardar',
    progress: 'Concluir',
    ready: 'Começar',
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
      height: '100%',
    },
    textAlert: {
      color: validationColorTask[task.completed],
    },
    textTask: {
      width: 120,
    },
  });

  return (
    <View style={styles.view}>
      <View
        style={{
          ...styles.view,
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Text numberOfLines={5} style={styles.textTask}>
          {task.text}
        </Text>
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
