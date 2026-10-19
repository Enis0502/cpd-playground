import { styles } from "./styles";
import { Text, View } from "react-native";

export default function ProfileCard({ name, role, year }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text>
        {role} . Year {year}{" "}
      </Text>
    </View>
  );
}
