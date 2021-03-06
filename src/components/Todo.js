import React, {useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TodoContext from '../context/TodoContext'

export const Todo = ({ todo }) => {

   const {removeTodo, openTodo} = useContext(TodoContext)
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => openTodo(todo.id)}
      onLongPress={() => removeTodo(todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 15,
  },
});
