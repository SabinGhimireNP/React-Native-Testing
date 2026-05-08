import { Stack, Tabs, useRouter } from "expo-router";
import { ChevronLeft,  } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

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
          headerShown: true, // Hide the header for the Home screen
          headerLeft: () => {
            return (
              <Pressable
                onPress={() => {
                  router.push("/");
                }}
                className="p-2 border rounded-lg border-gray-300 mr-5 flex flex-row items-center justify-center"
              >
                <ChevronLeft color="#64748b" size={20} />
                <Text>Home</Text>
              </Pressable>
            );
          },
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: "Product Details",
          headerShown: true, // Hide the header for the Home screen
          headerLeft: () => {
            return (
              <Pressable
                onPress={() => {
                  router.push("/Products/testing");
                }}
                className="p-2 border rounded-lg border-gray-300 mx-5 flex flex-row items-center justify-center"
              >
                <ChevronLeft color="#64748b" size={20} />
                <Text>Back</Text>
              </Pressable>
            );
          },
        }}
        
      />
    </Stack>
  );
}
