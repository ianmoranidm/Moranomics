// Importing necessary components
import React, { useState } from 'react';  // React import to handle state and component logic
import { TextInput, Button, View, StyleSheet } from 'react-native';  // UI components from React Native

// ExpenseInput component to handle adding expenses
const ExpenseInput: React.FC<{ onAddExpense: (expense: number) => void }> = ({ onAddExpense }) => {
  const [expense, setExpense] = useState<string>('');  // Local state to store the expense value
  
  // Function to handle submitting the expense
  const handleSubmit = () => {
    const expenseNumber = parseFloat(expense);  // Convert input to number
    if (expenseNumber > 0) {
      onAddExpense(expenseNumber);  // Pass the expense to the parent component
      setExpense('');  // Clear the input field
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter an expense"
        value={expense}
        onChangeText={setExpense}  // Update the local state with input value
        keyboardType="numeric"  // Only allow numeric input
      />
      <Button title="Add Expense" onPress={handleSubmit} />
    </View>
  );
};

// Styles for ExpenseInput component
const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
});

export default ExpenseInput;  // Default export

