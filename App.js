
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionNavigator from './Components/TN'; 
import TransactionSummaryComponent from './Components/TSC'; 
import { TransactionProvider } from './Components/TP'; 
import React from 'react';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TransactionProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Transactions" component={TransactionNavigator} />
          <Tab.Screen name="Summary" component={TransactionSummaryComponent} />
          
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionProvider>
  );
}