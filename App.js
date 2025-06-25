import React from "react";
import { ScrollView, View } from "react-native";
import Homescreen from "./src/screens/Home/Homescreen";

const App = () => {
  return (
    <ScrollView>
      <View>
        <Homescreen />
      </View>
    </ScrollView>
  );
};

export default App;
