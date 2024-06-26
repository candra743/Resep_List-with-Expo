import React from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';

const ResepDetail = ({ route, navigation }) => {
  const { resep } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image source={resep.image} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{resep.name}</Text>
          <Text style={styles.description}>{resep.description}</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Kembali"
              onPress={() => navigation.navigate('Resep List')}
              color="#3c59ff"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  contentContainer: {
    padding: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 6,
    overflow: 'hidden',
  },
});

export default ResepDetail;
