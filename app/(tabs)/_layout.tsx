import { Tabs, useRouter } from "expo-router";
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
    <Tabs
      screenOptions={{
        headerShown: false, // Applies to all screens automatically
        tabBarActiveTintColor: "#2563eb", // A nice blue for the active tab
        tabBarInactiveTintColor: "#64748b", // Slate gray for inactive tabs
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "#e2e8f0",
          height: 60,
          paddingBottom: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false, // Hide the header for the Home screen
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="testing"
        options={{
          title: "Products",
          headerShown: true, // Hide the header for the Home screen
          // Swapped TestTube for PackageSearch since it's a product list!
          tabBarIcon: ({ color, size }) => (
            <PackageSearch color={color} size={size} />
          ),
          headerLeft: () => {
            return (
              <Pressable
                onPress={() => {
                  router.push("/");
                }}
                className="p-2 border rounded-lg border-gray-300 mx-5 flex flex-row items-center justify-center"
              >
                <ChevronLeft color="#64748b" size={20} />
                <Text>Home</Text>
              </Pressable>
            );
          },
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Settings",
          headerShown: true, // Hide the header for the Home screen
          href: "/setting", // Ensure this matches your actual route
          tabBarIcon: ({ color, size }) => (
            <Settings color={color} size={size} />
          ),
          headerLeft: () => {
            return (
              <Pressable
                onPress={() => {
                  router.push("/");
                }}
                className="p-2 border rounded-lg border-gray-300 mx-5 flex flex-row items-center justify-center"
              >
                <ChevronLeft color="#64748b" size={20} />
                <Text>Home</Text>
              </Pressable>
            );
          },
        }}
      />
      <Tabs.Screen
        name="BackingTest"
        options={{
          title: "BackingTest",
          headerShown: true, // Hide the header for the Home screen
          href: null,
          tabBarIcon: ({ color, size }) => (
            <Settings color={color} size={size} />
          ),
          headerLeft: () => {
            return (
              <Pressable
                onPress={() => {
                  router.push("/");
                }}
                className="p-2 border rounded-lg border-gray-300 mx-5 flex flex-row items-center justify-center"
              >
                <ChevronLeft color="#64748b" size={20} />
                <Text>Home</Text>
              </Pressable>
            );
          },
        }}
      />
    </Tabs>
  );
}
