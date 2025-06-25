import React from "react";
import { View, StyleSheet } from "react-native";
import Homescreen from "./src/screens/Home/Homescreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsScreen from "./src/screens/MealsScreen/MealsScreen";

const App = () => {
  const Stack = createNativeStackNavigator();
  // const isOpen = true;
  return (
    <>
      <StatusBar style="dark" />
      {/* <View style={styles.scroll}> */}

      {/* </View> */}
      <NavigationContainer>
        <Stack.Navigator
        // initialRouteName={isOpen ? "MealsScreen" : "HomeScreen"}
        >
          <Stack.Screen name="HomeScreen" component={Homescreen} />
          <Stack.Screen name="MealsScreen" component={MealsScreen} />
        </Stack.Navigator>
        {/* <Homescreen /> */}
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
});
