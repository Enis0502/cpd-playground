import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text style={{ color: "black", fontSize: 32 }}>
        {time.toLocaleTimeString()}
      </Text>
    </View>
  );
}
