import React, { createContext, useContext, useState } from 'react';

export const TransactionsContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactionsData, setTransactionsData] = useState([
    { id: 1, name: 'Starbucks', place: 'London, ON', amount: '$12', date: '2024-03-29' },
    { id: 2, name: 'Apple Store', place: 'Toronto, ON', amount: '$110', date: '2024-03-29' },
    { id: 3, name: 'Sephora', place: 'Vancouver, BC', amount: '$50', date: '2024-03-29' },
    { id: 4, name: 'Shoppers Drug Mart', place: 'Calgary, AB', amount: '$30', date: '2024-03-21' },
    { id: 5, name: 'Pizza Hut', place: 'Montreal, QC', amount: '$25', date: '2024-03-29' },
    { id: 6, name: 'The Cheesecake Factory', place: 'Halifax, NS', amount: '$80', date: '2024-03-27' },
    { id: 7, name: 'Nike', place: 'Winnipeg, MB', amount: '$150', date: '2024-03-26' },
    { id: 8, name: 'Tim Hortons', place: 'Edmonton, AB', amount: '$5', date: '2024-03-27' },
    { id: 9, name: 'Whole Foods', place: 'Quebec City, QC', amount: '$40', date: '2024-03-29' },
    { id: 10, name: 'Cineplex', place: 'Victoria, BC', amount: '$20', date: '2024-03-29' }
    
    
  ]);

  return (
    <TransactionsContext.Provider value={{ transactionsData, setTransactionsData }}>
      {children}
    </TransactionsContext.Provider>
  );
};