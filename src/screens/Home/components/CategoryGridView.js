import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

const CategoryGridView = ({ title, color }) => {
  return (
    <View style={[styles.gridView,  { backgroundColor: color }]}>
      <Pressable style={styles.btnStyle}>
        <View style={styles.categoryColor}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridView;

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
    margin: 12,
    height: 120,
    borderRadius: 10,
    elevation: 4,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowColor: black,
  },
  btnStyle: { flex: 1 },
  categoryColor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
