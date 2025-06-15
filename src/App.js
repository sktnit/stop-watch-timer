// Create a counter with three button start, stop and pause.
// 2. On click of start counter would start from 1.
// 3. and after 3 ms the counter value would increase by 1.
// 4. On pause the counter should maintain it's value and stop should reset the counter value to 0

import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
export default App = () => {
  const [count, setCount] = React.useState(0);
  const currCountRef = React.useRef(null);
  const onStart = () => {
    if (currCountRef.current) return;
    currCountRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 500);
  };
  const onPause = () => {
    clearInterval(currCountRef.current);
    currCountRef.current = null;
  };
  const onStop = () => {
    clearInterval(currCountRef.current);
    currCountRef.current = null;
    setCount(0);
  };

  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{count}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {/* create 3 buttons */}
        <View style={styles.button}>
          <Button title="Start" onPress={onStart} />
        </View>
        <View style={styles.button}>
          <Button title="Pause" onPress={onPause} />
        </View>
        <View style={styles.button}>
          <Button title="Stop" onPress={onStop} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 600,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    gap: 4,
  },
  button: {
    width: "100px",
    height: "50px",
  },
});
