import React from 'react';
import { View, Text } from 'react-native';

const TDS = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={{ padding: 16, backgroundColor: '#f0f8ff' }}>
      <Text>Name: {transaction.name}</Text>
      <Text>Place: {transaction.place}</Text>
      <Text>Amount: {transaction.amount}</Text>
      <Text>Date: {transaction.date}</Text>
    </View>
  );
};

export default TDS;
