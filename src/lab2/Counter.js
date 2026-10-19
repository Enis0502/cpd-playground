import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [likes, setLikes] = useState(12);
  const [toggle, setToggle] = useState(false);
  return (
    <View style={styles.screen}>
      <Text>Count : {count}</Text>
      <Pressable
        onPress={() => {
          toggle ? setLikes(likes - 1) : setLikes(likes + 1);

          setToggle(!toggle);
        }}
      >
        <Text style={toggle ? styles.liked : null}> [ Like ({likes})]</Text>
      </Pressable>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={() => setCount(count + 1)}>
          <Text> [ add +1 ]</Text>
        </Pressable>
        <Pressable onPress={() => setCount(count - 1)} disabled={count == 0}>
          <Text style={count == 0 ? styles.disabled : null}>[subtract -1]</Text>
        </Pressable>
        <Pressable onPress={() => setCount(0)}>
          <Text> [restart 0 ] </Text>
        </Pressable>
      </View>
    </View>
  );
}
