import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  Button,
  Alert,
} from 'react-native';

const App = () => {
  const [header, setHeader] = useState('TEXT HERE');
  return (
    <SafeAreaView style={styles.view}>
      <Text style={{fontSize: 30, color: '#000'}}>{header}</Text>
      <Button
        color="orange"
        title="Change Text"
        onPress={() => {
          Alert.prompt('Change Text', 'Meaasge', text => console.log(text));
        }}
      />

      <Image source={require('./assets/WRA.jpeg')} />
      <Button
        color="lightgreen"
        title="ALERT"
        onPress={() => {
          Alert.alert('Confirm', 'select a option', [
            {
              text: 'YES',
              onPress: () => {
                console.log('YES');
              },
              style: 'default',
            },
            {
              text: 'NO',
              onPress: () => {
                console.log('NO');
              },
              style: 'cancel',
            },
          ]);
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
