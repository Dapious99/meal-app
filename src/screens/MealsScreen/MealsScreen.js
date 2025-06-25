import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../constant/dummy-data";
import MealItem from "./components/MealItem";

const MealsScreen = ({ route }) => {
  const catIdForMeal = route.params.categoryId;

  const mealsToDisplay = MEALS.filter((mealItem) => {
    // mealItem.categoryIds === catIdForMeal;
    mealItem.categoryIds.indexOf(catIdForMeal) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View>
      <FlatList
        data={mealsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsScreen;

const style = StyleSheet.create({
  container: { flex: 1, margin: 24 },
});
