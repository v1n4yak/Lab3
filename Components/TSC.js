// TransactionSummaryComponent.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TransactionsContext } from './TP'; // Assuming you need this context for data

const TSC = () => {
  const { transactionsData } = useContext(TransactionsContext); // Assuming you need this context for data

  if (!transactionsData || !Array.isArray(transactionsData)) {
    return <Text>No transactions data available.</Text>;
  }

  // Calculate summary data
  const totalTransactions = transactionsData.length;
  const highestTransaction = Math.max(...transactionsData.map((t) => parseFloat(t.amount.replace('$', ''))));
  const lowestTransaction = Math.min(...transactionsData.map((t) => parseFloat(t.amount.replace('$', ''))));
  const totalAmount = transactionsData.reduce((acc, curr) => acc + parseFloat(curr.amount.replace('$', '')), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total number of transactions: {totalTransactions}</Text>
      <View style={styles.separator} />
      <Text style={styles.text}>Highest transaction: ${highestTransaction}</Text>
      <View style={styles.separator} />
      <Text style={styles.text}>Lowest transaction: ${lowestTransaction}</Text>
      <View style={styles.separator} />
      <Text style={styles.text}>Total amount: ${totalAmount.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor:'#178BAC'
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#178BAC',
    marginVertical: 8,
  },
});

export default TSC;
