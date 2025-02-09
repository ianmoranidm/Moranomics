// Importing necessary components
import React, { useState } from 'react';  // React import to work with React functionality
import { View, Text, StyleSheet, Button } from 'react-native';  // Components from React Native for UI elements
import ExpenseInput from '../components/ExpenseInput';  // Default import of ExpenseInput component
import BudgetDisplay from '../components/BudgetDisplay';  // Default import of BudgetDisplay component
import ProgressBar from '../components/ProgressBar';  // Default import of ProgressBar component




//USE OF THE API KEYS STILL NEED TO BE ADDED AND BUGS WORKED OUT/BACKEND SHOULD BE ADDED
// import { PLAID_CLIENT_ID, PLAID_SECRET, PLAID_ENV } from 'react-native-dotenv';

// console.log(PLAID_CLIENT_ID, PLAID_SECRET, PLAID_ENV);




// HomeScreen component - main screen of the app
const HomeScreen: React.FC = () => {
  const [expenses, setExpenses] = useState<number[]>([]);  // Track the list of expenses
  const [budget, setBudget] = useState<number>(1000);  // User's budget, hardcoded as 1000 for simplicity
  
  // Function to handle adding a new expense
  const addExpense = (expense: number) => {
    setExpenses([...expenses, expense]);  // Add new expense to the state
  };

  // Function to calculate total expenses
  const getTotalExpenses = () => expenses.reduce((acc, curr) => acc + curr, 0);

  // Function to calculate the remaining budget
  const getRemainingBudget = () => budget - getTotalExpenses();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Moranomics</Text>
      
      {/* Expense input component to add new expenses */}
      <ExpenseInput onAddExpense={addExpense} />
      
      {/* Displaying the total expenses */}
      <BudgetDisplay total={getTotalExpenses()} remaining={getRemainingBudget()} />
      
      {/* Progress bar to visualize remaining budget */}
      <ProgressBar progress={(getTotalExpenses() / budget) * 100} />
      
      {/* Button to reset expenses */}
      <Button title="Reset Expenses" onPress={() => setExpenses([])} />
    </View>
  );
};

// Styles for the HomeScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;  // Exporting HomeScreen as the default export
