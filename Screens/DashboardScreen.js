// DashboardScreen.js

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";
import ReadingMaterial from "./ReadingMaterial";
import VideoTutorials from "./VideoTutorials";
import Classes from "./Classes";
import Quizzes from "./Quizzes";
import Exams from "./Exams";
import SubscribeScreen from "./SubscribeScreen";
import SmallCardGrid from './components/SmallCardGrid'

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
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <SmallCardGrid/>
    </View>
  );
};

// Stack Navigator for the Profile screen
const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};
const ReadingMaterialStack = createStackNavigator();
const ReadingMaterialStackScreen = () => {
  return (
    <ReadingMaterialStack.Navigator>
      <ReadingMaterialStack.Screen
        name="ReadingMaterial"
        component={ReadingMaterial}
        options={{ headerShown: false }}
      />
    </ReadingMaterialStack.Navigator>
  );
};
const ClassesStack = createStackNavigator();
const ClassesStackScreen = () => {
  return (
    <ClassesStack.Navigator>
      <ClassesStack.Screen
        name="Classes"
        component={Classes}
        options={{ headerShown: false }}
      />
    </ClassesStack.Navigator>
  );
};
const VideoTutorialsStack = createStackNavigator();
const VideoTutorialsStackScreen = () => {
  return (
    <VideoTutorialsStack.Navigator>
      <VideoTutorialsStack.Screen
        name="VideoTutorials"
        component={VideoTutorials}
        options={{ headerShown: false }}
      />
    </VideoTutorialsStack.Navigator>
  );
};
const QuizzesStack = createStackNavigator();
const QuizzesStackScreen = () => {
  return (
    <QuizzesStack.Navigator>
      <QuizzesStack.Screen
        name="Quizzes"
        component={Quizzes}
        options={{ headerShown: false }}
      />
    </QuizzesStack.Navigator>
  );
};
const ExamsStack = createStackNavigator();
const ExamsStackScreen = () => {
  return (
    <ExamsStack.Navigator>
      <ExamsStack.Screen
        name="Exams"
        component={Exams}
        options={{ headerShown: false }}
      />
    </ExamsStack.Navigator>
  );
};
const SubscribeScreenStack = createStackNavigator();
const SubscribeScreenStackScreen = () => {
  return (
    <SubscribeScreenStack.Navigator>
      <SubscribeScreenStack.Screen
        name="SubscribeScreen"
        component={SubscribeScreen}
        options={{ headerShown: false }}
      />
    </SubscribeScreenStack.Navigator>
  );
};

// Drawer content component
const DrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <View style={styles.profileBox}>
          <View>
            <MaterialCommunityIcons
              name="account-circle"
              size={100}
              color="dodgerblue"
            />
          </View>
          <Text style={styles.UserName}>Andama Godwin</Text>
          <Text>Lower Secondary</Text>
        </View>
        <DrawerItem
          label="Dashboard"
          onPress={() => navigation.navigate("Dashboard")}
        />
        <View style={styles.sideNavList}>
          <Text style={styles.sideNavTitle}>Learning</Text>
          <DrawerItem
            style={styles.sideNavItem}
            label="Reading Material"
            onPress={() => navigation.navigate("ReadingMaterial")}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="book-open"
                size={size}
                color={color}
              />
            )}
          />
          <DrawerItem
            style={styles.sideNavItem}
            label="Video Tutorials"
            onPress={() => navigation.navigate("VideoTutorials")}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="video" size={size} color={color} />
            )}
            activeBackgroundColor="red"
          />
          <DrawerItem
            style={styles.sideNavItem}
            label="Classes"
            labelStyle={{ width: 100 }}
            onPress={() => navigation.navigate("Classes")}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="school" size={size} color={color} />
            )}
          />
        </View>
        <View style={styles.sideNavList}>
          <Text style={styles.sideNavTitle}>Assessments</Text>
          <DrawerItem
            style={styles.sideNavItem}
            label="Quizzes"
            labelStyle={{ width: 100 }}
            onPress={() => navigation.navigate("Quizzes")}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="clipboard-check"
                size={size}
                color={color}
              />
            )}
          />
          <DrawerItem
            style={styles.sideNavItem}
            label="Exams"
            labelStyle={{ width: 100 }}
            onPress={() => navigation.navigate("Exams")}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="file-document"
                size={size}
                color={color}
              />
            )}
          />
        </View>
        <View>
          <DrawerItem
            style={styles.sideNavItem}
            label="Subscribe"
            labelStyle={{ width: 100 }}
            onPress={() => navigation.navigate("SubscribeScreen")}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="credit-card"
                size={size}
                color={color}
              />
            )}
          />
        </View>
        <View>
          <DrawerItem
            label="Logout"
            labelStyle={{ width: 100 }}
            style={styles.LogOut}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="logout" size={size} color={color} />
            )}
            activeBackgroundColor="red" // Change background color when item is pressed
            inactiveBackgroundColor="dodgerblue" // Change background color when item is inactive
            activeTintColor="white" // Change text and icon color when item is pressed
            inactiveTintColor="white"
            onPress={() => navigation.navigate("Exams")}
          />
          {/* <DrawerItem
            label="Profile"
            onPress={() => navigation.navigate("Profile")}
          /> */}
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

// Drawer Navigator for the Dashboard and Profile screens
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        statusBarColor: 'dodgerblue',
        headerStyle: {
          backgroundColor:'dodgerblue'
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        
      }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      <Drawer.Screen
        name="ReadingMaterial"
        component={ReadingMaterialStackScreen}
      />
      <Drawer.Screen
        name="VideoTutorials"
        component={VideoTutorialsStackScreen}
      />
      <Drawer.Screen name="Classes" component={ClassesStackScreen} />
      <Drawer.Screen name="Quizzes" component={QuizzesStackScreen} />
      <Drawer.Screen name="Exams" component={ExamsStackScreen} />
      <Drawer.Screen name="SubscribeScreen" component={SubscribeScreenStackScreen} />
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  profileBox: {
    // borderBottomWidth: "2px",
    // borderBottomColor: "dodgerblue",
    width: '100%',
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "column",
    // backgroundColor: "d",
  },
  sideNavTitle: {
    fontWeight: "bold",
    width: 200,
  },
  UserName: {
    fontWeight: "bolder",
  },
  sideNavItem:{
    width:200,
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    // backgroundColor: 'dodgerblue',
    color:'white'
    // borderWidth:1

  },
  sideNavList: {
    width: "100%",
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DrawerNavigator;
