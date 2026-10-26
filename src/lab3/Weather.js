import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { styles } from "../lab2/styles";
import { CITIES } from "./Cities.js";

/*const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast" +
  `?latitude=43.86&longitude=18.41&current=temperature_2m,wind_speed_10m`;
*/
export default function Weather() {
  const [city, setCity] = useState(CITIES[0]);
  const [weather, setWeather] = useState(null);
  const [wind, setWind] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,wind_speed_10m`,
        );
        if (!res.ok) throw new Error(`Request failed. ${res.status}`);
        const json = await res.json();
        console.log(json);
        if (!ignore) setWeather(json.current.temperature_2m);
        if (!ignore) setWind(json.current.wind_speed_10m);
      } catch (e) {
        if (!ignore) setError(`Could not load the weather.`);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, [city]);

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Error {error}</Text>;
  return (
    <View style={styles.screen}>
      <View style={{ flexDirection: "column" }}>
        {CITIES.map((city) => {
          return (
            <Pressable
              key={city.id}
              onPress={() => {
                {
                  console.log(city);
                  console.log(city.lat);
                  console.log(city.lon);
                }
              }}
            >
              <Text>[{city.name}]</Text>
            </Pressable>
          );
        })}
      </View>
      <Text> City: {city.name} </Text>
      <Text> {weather} °C</Text>
      <Text>Wind {wind} km/h</Text>
    </View>
  );
}
