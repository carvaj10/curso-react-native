import { Pressable, View } from "react-native";
import { Stack } from "expo-router";
import { Logo } from "../components/Logo";
import { CircleInfoIcon } from "../components/icons";
import { Link } from "expo-router";
import { Screen } from "../components/Screen";

export default function Layout() {
  return (
    <Screen>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <CircleInfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Screen>
  );
}
