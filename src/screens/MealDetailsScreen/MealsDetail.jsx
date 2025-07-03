import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color } from "../../constant/colors";
import { capitalize } from "../../utils";

const MealsDetail = ({ route }) => {
  const meal = route.params.item;

  return (
    <View>
      <View>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{meal.title}</Text>
      </View>
      <View style={styles.otherDetails}>
        <Text>Pocket-Friendly: {capitalize(meal.affordability)}</Text>
        <Text>Complexity: {capitalize(meal.complexity)}</Text>
        <Text>Duration: {meal.duration}mins</Text>
        <Text>Ingredients: {meal.ingredients}</Text>
        <Text>Lactose: {meal.isLactoseFree === true ? "True" : "False"}</Text>
        <Text>
          For veggies: {meal.isVegetarian === true ? "True" : "False"}
        </Text>
      </View>
    </View>
  );
};

export default MealsDetail;

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
