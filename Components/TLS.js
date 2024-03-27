import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { TransactionsContext } from './TP'; 
const TLS = ({ navigation }) => {
  const { transactionsData } = useContext(TransactionsContext); 
  return (
    <View>
      <FlatList
        data={transactionsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
            <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc', backgroundColor: '#f0f8ff' }}>
              <Text>{item.name}</Text>
              <Text>{item.amount}</Text>
            
</View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TLS;
