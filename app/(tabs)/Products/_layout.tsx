import { Stack, Tabs, useRouter } from "expo-router";
import {
  ChevronLeft,
  Home,
  PackageSearch,
  Settings,
} from "lucide-react-native";
import { Pressable, Text } from "react-native";

export default function TabLayout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="testing"
        options={{
          title: "Testing",
          headerShown: false, // Hide the header for the Home screen
        }}
      />
    </Stack>
  );
}
