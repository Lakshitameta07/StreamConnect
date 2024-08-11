import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

export default function TabsNavigator() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: 'Chats',
                headerTitleAlign:"center",
                tabBarIcon: ({ size, color }) =>
                    <Ionicons name="chatbox-outline" size={size} color={color} />
            }} />
            <Tabs.Screen name="Profile" options={{
                title: 'Profile',
                headerTitleAlign:"center",
                tabBarIcon: ({ size, color }) =>
                    <Feather name="user" size={size} color={color} />
            }} />
        </Tabs>
    )
}
