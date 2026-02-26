import products from "@/assets/data/products";
import Colors from "@/src/constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";

const product = products[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: product.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    borderRadius: 20,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.light.tint,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
