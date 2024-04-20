import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contador from './src/components/Contador';
import Pai from './src/components/direta/Pai';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Contador passo={1} inicial={0}/> */}
      <Pai/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
