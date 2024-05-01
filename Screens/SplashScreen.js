import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import {Image} from "react-native"

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("LoginScreen"); // Navigate to login screen after 3 seconds
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 160, height: 160, resizeMode: "contain" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SplashScreen;
