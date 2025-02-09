// Importing React and components
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// BudgetDisplay component to show the total expenses and remaining budget
const BudgetDisplay: React.FC<{ total: number; remaining: number }> = ({ total, remaining }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total Expenses: ${total}</Text>
      <Text style={styles.text}>Remaining Budget: ${remaining}</Text>
    </View>
  );
};

// Styles for BudgetDisplay component
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default BudgetDisplay;  // Default export
