import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import useGlobal from './hooks/useGlobal';

export default function App() {
  const [state, actions] = useGlobal(['counter'])
  
  return (
    <View style={styles.container}>
      <Button onPress={() => actions.increment()} title="+"/>
      <Text style={{ marginHorizontal: 10 }}>{state.counter}</Text>
      <Button onPress={() => actions.decrement()} title="-"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
