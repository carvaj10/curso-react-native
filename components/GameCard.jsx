import { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";
import {
  getCachedTranslation,
  cacheTranslation,
} from "../lib/translationChache";

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
  const [translatedDescription, setTranslatedDescription] = useState(null);

  useEffect(() => {
    const handleDescriptionTranslation = async () => {
      try {
        // Intentar obtener la traducción desde la caché
        const cachedTranslation = await getCachedTranslation(game.description);
        if (cachedTranslation) {
          setTranslatedDescription(cachedTranslation);
        } else {
          // Si no hay traducción en caché, guarda la descripción original en caché
          setTranslatedDescription(game.description);
          await cacheTranslation(game.description, game.description);
        }
      } catch (error) {
        console.error("Error during translation caching:", error);
        setTranslatedDescription(game.description);
      }
    };

    handleDescriptionTranslation();
  }, [game.description]);

  return (
    <Link href={`/${game.slug}`} asChild>
      <StyledPressable
        className="active: opacity-70 border border-black
      active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4"
      >
        <View className="flex-row gap-4" key={game.slug}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="mb-1" style={styles.title}>
              {game.title}
            </Text>
            <Score score={game.score} maxScore={100} />
            <Text className="mt-2" style={styles.description}>
              {translatedDescription
                ? translatedDescription.slice(0, 100) + "..."
                : game.description.slice(0, 100) + "..."}
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
});
