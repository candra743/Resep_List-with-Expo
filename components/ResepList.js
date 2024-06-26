import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ResepList = ({ navigation }) => {
  const reseps = [
    { 
      id: '1', 
      name: 'Mie Tek Tek', 
      description: "Bahan-bahan:\n" +
                   "- 200 gram mie telur\n" +
                   "- 100 gram ayam fillet, potong kecil-kecil\n" +
                   "- 2 butir telur, kocok lepas\n" +
                   "- 2 siung bawang putih, cincang halus\n" +
                   "- 1 buah tomat, potong-potong\n" +
                   "- 1 buah wortel, iris tipis\n" +
                   "- 1 batang daun bawang, iris halus\n" +
                   "- 1 sendok makan kecap manis\n" +
                   "- 1 sendok makan saus tiram\n" +
                   "- 1 sendok teh kecap ikan\n" +
                   "- Garam dan merica secukupnya\n" +
                   "- Minyak untuk menumis",
      image: require('../assets/mietek.jpg')
    },
    {
      id: '2', 
      name: 'Nasi Goreng', 
      description:  "Bahan-bahan:\n" +
                   "- 2 piring nasi putih\n" +
                   "- 100 gram ayam atau udang, potong kecil-kecil\n" +
                   "- 2 butir telur, kocok lepas\n" +
                   "- 2 siung bawang putih, cincang halus\n" +
                   "- 1 buah cabai merah, iris tipis (opsional)\n" +
                   "- 2 sendok makan kecap manis\n" +
                   "- 1 sendok makan kecap asin\n" +
                   "- 1 sendok teh saus tiram\n" +
                   "- Garam dan merica secukupnya\n" +
                   "- Minyak untuk menumis",
      image: require('../assets/nasigoreng.jpg') 
    },
    { 
      id: '3', 
      name: 'Opor Ayam', 
      description: "Bahan-bahan:\n" +
                   "- 1 ekor ayam, potong menjadi 8 bagian\n" +
                   "- 500 ml santan kental\n" +
                   "- 500 ml santan cair\n" +
                   "- 4 lembar daun salam\n" +
                   "- 2 batang serai, memarkan\n" +
                   "- 3 cm lengkuas, memarkan\n" +
                   "- 5 butir bawang merah, iris tipis\n" +
                   "- 3 siung bawang putih, iris tipis\n" +
                   "- 1 sendok makan ketumbar bubuk\n" +
                   "- 1 sendok teh jintan bubuk\n" +
                   "- 3 cm kunyit, bakar lalu memarkan\n" +
                   "- 2 sendok makan garam\n" +
                   "- 1 sendok teh gula pasir\n" +
                   "- Minyak untuk menumis",
      image: require('../assets/oporayam.jpg') 
    },
  ];

  const renderResepItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail', { resep: item })}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detail', { resep: item })}>
          <Text style={styles.buttonText}>Lihat Resep</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={reseps}
      renderItem={renderResepItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    paddingLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3c59ff',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
    marginRight: 5,
    alignSelf: 'flex-end', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ResepList;
