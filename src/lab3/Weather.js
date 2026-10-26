import { useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { styles } from "../lab2/styles";
import { CITIES } from "./Cities.js";
import { useFetch } from "./useFetch.js";

function currentUrl(city) {
  return (
    "https://api.open-meteo.com/v1/forecast" +
    `?latitude=${city.lat}&longitude=${city.lon}` +
    "&current=temperature_2m,wind_speed_10m"
  );
}

export default function Weather() {
  const [city, setCity] = useState(CITIES[0]);
  const { data, loading, error } = useFetch(currentUrl(city));

  return (
    <View style={styles.screen}>
      <View style={{ flexDirection: "column" }}>
        {CITIES.map((c) => (
          <Pressable key={c.id} onPress={() => setCity(c)}>
            <Text>[{c.name}]</Text>
          </Pressable>
        ))}
      </View>

      <Text>City: {city.name}</Text>
      {loading && <ActivityIndicator />}
      {error && <Text>Error: {error}</Text>}
      {data && (
        <>
          <Text>{data.current.temperature_2m} °C</Text>
          <Text>Wind {data.current.wind_speed_10m} km/h</Text>
        </>
      )}
    </View>
  );
}