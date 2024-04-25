// DashboardScreen.js

import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Profile screen component
const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
    </View>
  );
};

// Custom header component for the top navigation bar
const CustomHeader = ({ navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <MaterialCommunityIcons name="menu" size={24} onPress={openDrawer} />
      <Text style={{ fontSize: 20, marginLeft: 10 }}>Dashboard</Text>
    </View>
  );
};

// Dashboard screen component
const DashboardScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to the Dashboard!</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

// Stack Navigator for the Profile screen
const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

// Drawer content component
const DrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <DrawerItem
        label="Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </DrawerContentScrollView>
  );
};

// Drawer Navigator for the Dashboard and Profile screens
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
