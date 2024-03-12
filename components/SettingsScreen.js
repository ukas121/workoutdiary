import React, { useContext } from "react";
import { View, Text } from "react-native";
import { SettingsContext } from "./contexts";
import { RadioButton } from "react-native-paper";
import Styles from "../style/Styles";
import { FontAwesome6 } from "@expo/vector-icons";

const SettingsScreen = () => {
  const { units, setUnits } = useContext(SettingsContext);

  return (
    <View style={Styles.containerTwo}>
      <Text style={Styles.WoutHeader}>Settings</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton
          value="kilometers"
          status={units === "kilometers" ? "checked" : "unchecked"}
          onPress={() => setUnits("kilometers")}
          color="red"
          uncheckedColor="black"
        />
        <Text style={{ color: "black" }}>Kilometers</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: 40,
          height: 50,
        }}
      >
        <RadioButton
          value="miles"
          status={units === "miles" ? "checked" : "unchecked"}
          onPress={() => setUnits("miles")}
          color="red"
          uncheckedColor="black"
        />
        <Text style={{ color: "black" }}>Miles</Text>
      </View>
      <Text>
        {" "}
        <FontAwesome6
          name="gears"
          size={150}
          color="black"
          style={Styles.information}
        />
      </Text>
    </View>
  );
};

export default SettingsScreen;
