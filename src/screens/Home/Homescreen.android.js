import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../../constant/dummy-data";
import CategoryGridView from "./components/CategoryGridView";

const Homescreen = ({ navigation }) => {
  function categoryItemRenderer({ item }) {
    function pressHandler() {
      navigation.navigate("MealsScreen", { categoryId: item.id });
    }
    return (
      <CategoryGridView
        title={item.title}
        color={item.color}
        onClick={pressHandler}
      />
    );
  }
  return (
    <View style={styles.gridContainer}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={categoryItemRenderer}
        numColumns={2}
      />
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    padding: 16,
    marginTop: 10,
  },
  categoryDisplay: {
    flexDirection: "row",
  },
});
