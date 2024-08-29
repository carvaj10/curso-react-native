import { Text, View, Image, ActivityIndicator, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";
import {
  getCachedTranslation,
  cacheTranslation,
} from "../lib/translationChache";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);
  const [translatedDescription, setTranslatedDescription] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(async (info) => {
        setGameInfo(info);
        if (info.description) {
          try {
            // Intentar obtener la traducción desde la caché
            const cachedTranslation = await getCachedTranslation(
              info.description
            );
            if (cachedTranslation) {
              setTranslatedDescription(cachedTranslation);
            } else {
              // Si no hay traducción en caché, guarda la descripción original en caché
              setTranslatedDescription(info.description);
              await cacheTranslation(info.description, info.description);
            }
          } catch (error) {
            console.error("Error during translation caching:", error);
            setTranslatedDescription(info.description);
          }
        }
      });
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: `${id}`,
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white text-center font-bold text-xl">
                {gameInfo.title}
              </Text>
              <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                {translatedDescription !== null
                  ? translatedDescription
                  : gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
