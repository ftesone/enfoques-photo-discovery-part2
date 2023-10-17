import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Image, Dimensions, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export function Discover({ navigation }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => { loadRandomImage(); }, []);

  const loadRandomImage = () => {
    if (loading) return; // if it's already loading an image, don't try to pull another

    // get screen size
    const width = Math.floor(Dimensions.get('window').width);
    const height = Math.floor(Dimensions.get('window').height);

    // fetch a random image
    setLoading(true);
    // fetch returns a Promise, .then handles ok response, .catch handles error. This call is non-blocking
    fetch(`https://picsum.photos/${width}/${height}`)
      .then(response => setImageUrl(response.url))
      .catch(error => console.error(`Oh no! Something went wrong: ${error}`))
      .then(_ => setLoading(false))
    ;
  };

  return (
    <View style={styles.main}>
      <View style={styles.imageHolder}>
        {imageUrl && <Image style={styles.image} source={{uri: imageUrl}} />}
      </View>
      <View style={styles.footer}>
        <Button title="Descubrir nueva" onPress={loadRandomImage} />
        <Button title="Mis favoritas" onPress={() => navigation.navigate('Favs')} />
      </View>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <StatusBar translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
  },
  imageHolder: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
  },
  image: {
    flex: 1,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Discover;
