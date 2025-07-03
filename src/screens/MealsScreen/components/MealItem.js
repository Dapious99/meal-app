import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Color } from "../../../constant/colors";
import { capitalize } from "../../../utils";

const MealItem = ({
  title,
  affordability,
  complexity,
  isLactoseFree,
  isVegetarian,
  imageUrl,
  duration,
  ingredients,
  onPress,
}) => {
  // ,
  // steps,
  // isGlutenFree,
  // isVegan,

  return (
    <View style={styles.mealCont}>
      <Pressable onPress={onPress}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.otherDetails}>
          <Text>Pocket-Friendly: {capitalize(affordability)}</Text>
          <Text>Complexity: {capitalize(complexity)}</Text>
          <Text>Duration: {duration}mins</Text>
          {/* <Text>Ingredients: {ingredients}</Text> */}
          {/* <Text>Lactose: {isLactoseFree === true ? "True" : "False"}</Text>
          <Text>For veggies: {isVegetarian === true ? "True" : "False"}</Text> */}
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealCont: {
    shadowOpacity: 0.3,
    shadowColor: "black",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    borderRadius: 8,
    elevation: 10,
    backgroundColor: "white",
    overflow: "hidden",
    marginBottom: 10,
  },
  otherDetails: { padding: 8 },
  title: {
    fontSize: 18,
    textAlign: "center",
    color: Color.green,
    marginBottom: 12,
    fontWeight: "semibold",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderRadius: 10,
    marginBottom: 4,
  },
});
