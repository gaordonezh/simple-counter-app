import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Fab from '../components/Fab';

const CounterScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <Fab
        label="-1"
        onPress={() => setContador(prev => prev - 1)}
        position={{left: 25, bottom: 25}}
      />
      <Fab label="+1" onPress={() => setContador(prev => prev + 1)} />
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
  },
});
