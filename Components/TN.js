
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListScreen from './TLS';
import TransactionDetailsScreen from './TDS';
import TransactionSummaryComponent from './TSC';

const Stack = createStackNavigator();

const TN = () => {
  return (
    <Stack.Navigator
      initialRouteName="TransactionsList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#178BAC', 
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontStyle: 'italic'
        },
      }}
    >
      <Stack.Screen
        name="TransactionsList"
        component={TransactionListScreen}
        options={{ title: 'Transactions' }}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetailsScreen}
        options={{ title: 'Transaction Details' }}
      />
      <Stack.Screen
        name="Summary"
        component={TransactionSummaryComponent}
        options={{ 
          title: 'Summary',
          headerStyle: {
            backgroundColor: '#178BAC',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default TN;
