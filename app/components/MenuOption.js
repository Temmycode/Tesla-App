import { Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const MenuOption = ({ item, navigation }) => {
  return (
    <Pressable
      style={styles.optionRow}
      onPress={() => {
        navigation.navigate("Climate");
      }}
    >
      <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
      <Text style={styles.optionText}>{item.name}</Text>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color="gray"
        style={{ marginLeft: "auto" }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  optionText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default MenuOption;
