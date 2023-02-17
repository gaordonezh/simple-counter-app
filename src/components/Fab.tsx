import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface FabProps {
  onPress: () => void;
  label: string;
  position: {
    right?: number;
    bottom?: number;
    left?: number;
  };
}

const Fab = ({onPress, label, position}: FabProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.fabContainer, ...position}}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Fab;

Fab.defaultProps = {
  position: {
    right: 25,
    bottom: 25,
  },
};

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
