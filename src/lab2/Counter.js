import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function Counter() {
  let [count, setCount] = useState(0);

  return (
    <View style={styles.screen}>
      <Text>Count : {count}</Text>

      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={() => setCount(count + 1)}>
          <Text> [ add +1 ]</Text>
        </Pressable>
        <Pressable onPress={() => setCount(count - 1)} disabled={count == 0}>
          <Text style={count == 0 ? styles.disabled : null}> [subtract -1] </Text>
        </Pressable>
        <Pressable onPress={() => setCount((count = 0))}>
          <Text> [restart +1] </Text>
        </Pressable>
      </View>
    </View>
  );
}
