import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../constant/dummy-data";
import MealItem from "./components/MealItem";

const MealsScreen = ({ route }) => {
  const catIdForMeal = route.params.categoryId;
  const mealsToDisplay = MEALS.filter((mealItem) => {
    //return mealItem.categoryIds === catIdForMeal;
    return mealItem.categoryIds.indexOf(catIdForMeal) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem {...itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, margin: 12 },
});
