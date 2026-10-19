import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: "1", title: "Install Expo Go", done: true },
    { id: "2", title: "Finish Lab 2", done: false },
  ]);

  const [text, setText] = useState("");
  return (
    <View style={styles.screen}>
      <Text>{} Tasks left</Text>
      {todos.map((todo) => (
        <View key={todo.id} style={{ flexDirection: "row" }}>
          <Pressable
            onPress={() =>
              setTodos(
                todos.map((item) =>
                  item.id === todo.id ? { ...item, done: !item.done } : item,
                ),
              )
            }
          >
            <Text
              style={
                todo.done
                  ? { textDecorationLine: "line-through" }
                  : { textDecorationLine: "none" }
              }
            >
              {todo.id} {todo.title} {todo.done}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setTodos(todos.filter((item) => todo.id !== item.id));
            }}
          >
            <Text style={styles.liked}> Delete</Text>
          </Pressable>
        </View>
      ))}

      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="New task"
        style={styles.input}
      ></TextInput>

      <Pressable
        onPress={() =>
          setTodos([
            ...todos,
            { id: Date.now().toString(), title: text.trim(), done: false },
          ])
        }
      >
        <Text style={styles.liked}> Add task</Text>
      </Pressable>
    </View>
  );
}
