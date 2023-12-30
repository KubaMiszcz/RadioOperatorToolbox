import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert, ImageBackground, Switch } from 'react-native';
import { useState } from 'react';

const image2 = null //{uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function App() {
  const [wordDecoded, setWordDecoded] = useState('1122334');
  const [codeWord, setCodeWord] = useState('BACKGROUND');
  let [wordEncoded, setWordEncoded] = useState('');
  let [isEnabled, setIsEnabled] = useState(false);



  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  function encode() {
    wordEncoded = '';
    Array.from(wordDecoded).forEach((digit) => {
      wordEncoded += codeWord[Number(digit)];
    });
    setWordEncoded(wordEncoded);
  }


  function decode() {
    // result='';
    // Array.from(word).forEach((digit) => {
    //   result += codeWord[Number(digit)];
    // });
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={image2} resizeMode="cover" style={styles.image}>



        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />


        <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />




        <Text>Open up App.js to ggggggg working on your app!</Text>
        <StatusBar style="auto" />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          defaultValue={wordDecoded}
          placeholder='liczby do zaszyfrowania'
        />
        <Button
          onPress={encode}
          title="KODUJ"
          color="#841584"
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          placeholder='KLUCZ SARNEG'
          defaultValue={codeWord}
        />

        <Button
          onPress={decode}
          title="DEKODUJ"
          color="#841584"
        />


        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          defaultValue={wordEncoded}
          value={wordEncoded}
          placeholder={wordEncoded}
        />
      </ImageBackground>
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
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
