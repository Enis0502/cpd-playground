import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Section({ title, children }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View>{children}</View>
    </View>
  );
}
