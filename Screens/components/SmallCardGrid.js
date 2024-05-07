import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Array of names
const cardNames = [
  "Books",
  "Videos",
  "Classes",
  "Quizzes",
  "Exams",
  "Subscribe",
  
];

const SmallCardGrid = () => {
  const navigation = useNavigation();

  const handleCardPress = (name) => {
    // Navigate to a screen with the name as a parameter
    navigation.navigate("CardDetail", { name });
  };

  return (
    <View style={styles.container}>
      {cardNames.map((name, index) => (
        <TouchableOpacity key={index} onPress={() => handleCardPress(name)}>
          <View style={styles.card}>
            <Text style={styles.cardText}>{name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   width: "70%",
  //   height: "100%",
  //   // backgroundColor: "white",
  //   borderRadius: 10,
  //   color: "white",
  //   padding: 10,
  //   flex: 1,
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   alignItems: "center", // Align cards vertically
  //   justifyContent: "space-between", // Distribute space between cards
  //   padding: 10,
  // },
  container: {
    width: "100%",
    height: "100%",
    //backgroundColor: "white",
    borderRadius: 10,
    color: "white",
    //padding: 10,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center", // Align cards vertically
    justifyContent: "space-evenly", // Distribute space between cards
    padding: 20,
  },

  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 120,
    height: 100,
    backgroundColor: "dodgerblue",
    marginVertical: 5,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // color: "red",
    fontWeight: "light",
    marginBottom: 20,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    fontFamily:"Nunito",
  },
});

export default SmallCardGrid;
