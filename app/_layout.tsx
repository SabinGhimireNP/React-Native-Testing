import { Stack } from 'expo-router';
import "../global.css";

export default function Layout() {
    return (
        <Stack>
            {/* 1. Point to the group folder name, not the file inside it */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            
            {/* 2. Your testing screen */}
            <Stack.Screen name="testing" options={{ headerTitle: "Testing", headerShown: false }} />
            <Stack.Screen name="BackingTest" options={{ headerTitle: "World" } } />
        </Stack>
    );
}