// Importing necessary components
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// ProgressBar component to visualize the remaining budget
const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Budget Usage: {Math.round(progress)}%</Text>
      <View style={[styles.bar, { width: `${progress}%` }]} />
    </View>
  );
};

// Styles for ProgressBar component
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  bar: {
    height: 20,
    backgroundColor: 'green',
  },
});

export default ProgressBar;  // Default export
