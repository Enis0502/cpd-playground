import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../lab2/styles";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  return (
    <View style={styles.screen}>
      <Text> Seconds: {time} </Text>
      <Pressable
        onPress={() => {
          setRunning(() => !running);
        }}
      >
        <Text> [ Pause ] </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          setTime((time) => (time = 0));
        }}
      >
        <Text> [ Reset ]</Text>
      </Pressable>
    </View>
  );
}
