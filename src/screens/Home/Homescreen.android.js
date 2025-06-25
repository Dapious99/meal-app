import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../../constant/dummy-data";
import CategoryGridView from "./components/CategoryGridView";

function categoryItemRenderer({ itemData }) {
  return (
    <CategoryGridView title={itemData.item.title} color={itemData.item.color} />
  );
}

const Homescreen = () => {
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
  },
  categoryDisplay: {
    flexDirection: "row",
  },
});
