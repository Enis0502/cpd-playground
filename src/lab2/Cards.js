import { Text, View } from "react-native";
import  ProfileCard  from "./ProfileCard";
import { styles } from "./styles";

export default function Cards() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Lab 2</Text>
      <ProfileCard name="Enis" role="Student" year={3} />
      <ProfileCard name="Rale" role="Student" year={2} />
      <ProfileCard name="Dino" role="HR" year={3} />
    </View>
  );
}
