import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const testClick = () => {
  console.log("test");
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! UPDATED</Text>
      {/* <button onClick={() => testClick()}></button> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
