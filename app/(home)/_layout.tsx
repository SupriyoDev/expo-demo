import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const tabScreens = [
  { name: "index", title: "Todos", icon: "bookmarks" },
  { name: "settings", title: "Settings", icon: "settings" },
];

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#06b6d4",
        tabBarInactiveTintColor: "#9ca3af",

        //tabbar style
        tabBarStyle: {
          height: 90,
          paddingTop: 10,
          backgroundColor: "#374151",
          borderTopWidth: 1,
          borderTopColor: "#9ca3af",
        },

        //tabbar font style
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          paddingTop: 3,
        },
      }}
    >
      {tabScreens.map((tab) => (
        <Tabs.Screen
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={tab.icon}
                color={color}
                size={focused ? 28 : 25}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default HomeLayout;
