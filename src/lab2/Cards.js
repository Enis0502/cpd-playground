import { View } from "react-native";
import ProfileCard from "./ProfileCard";
import Section from "./Section";
import { styles } from "./styles";

export default function Cards() {
  return (
    <View style={styles.screen}>
      <Section title="Team">
        <ProfileCard name="Enis" role="Student" year={3} />
        <ProfileCard name="Rale" role="Student" year={2} />
        <ProfileCard name="Dino" role="HR" year={3} />
      </Section>
    </View>
  );
}
