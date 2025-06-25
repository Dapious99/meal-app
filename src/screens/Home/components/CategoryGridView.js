import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

const CategoryGridView = ({ title, color, onClick }) => {
  return (
    <View style={styles.gridView}>
      <Pressable
        android_ripple={{ color: "#ccc", borderless: 2 }}
        style={({ pressed }) => [
          styles.btnStyle,
          pressed ? styles.pressedBTNStyle : null,
        ]}
        onPress={onClick}
      >
        <View style={[styles.categoryColor, { backgroundColor: color }]}>
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
    shadowColor: "black",
  },
  btnStyle: { flex: 1 },
  pressedBTNStyle: { opacity: 0.5 },
  categoryColor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
