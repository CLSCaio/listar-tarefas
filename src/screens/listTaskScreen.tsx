import React, { useEffect } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { useTaskContext } from 'utils';
import { TaskCard } from 'components';
import { ITasks, RootStackParamList } from 'interfaces';

interface ListTaskScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'adicionar'>;
}

export const ListTaskScreen = ({
  navigation,
}: ListTaskScreenProps): JSX.Element => {
  const { tasks, toggleTaskStatus, clearCompletedTasks, loadTasks } =
    useTaskContext();

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <View style={styles.view}>
      <FlatList
        data={tasks}
        keyExtractor={(task: ITasks) => task.id.toString()}
        renderItem={({ item, index }: { item: ITasks; index: number }) => (
          <>
            <TaskCard task={item} toggleTaskStatus={toggleTaskStatus} />
            {index + 1 < tasks.length && (
              <View style={styles.separator}> </View>
            )}
          </>
        )}
      />

      <View style={styles.container}>
        <Button
          title="Adicionar nova tarefa"
          onPress={() => navigation.navigate('adicionar')}
        />
        <Button
          title="Limpar Tarefas Concluídas"
          onPress={clearCompletedTasks}
          color="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20,
  },
  container: {
    flex: 1,
    gap: 4,
    justifyContent: 'flex-end',
  },
  separator: {
    borderWidth: 0.2,
    borderColor: 'gray',
  },
});
