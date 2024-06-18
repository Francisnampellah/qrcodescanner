import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { height } from "react-native-dimension";

export default function Report({ route }) {
  const { data } = route.params;

  const [text, setText] = useState("");
  return (
    <View className="flex flex-1 w-full pt-16 justify-center items-center">
      <Text className="text-center font-bold">Fill Report</Text>

      <Text className="text-center font-bold">{data}</Text>

      <View className="p-8 w-full">
        <TextInput
          label="Fill form details"
          value={text}
          onChangeText={(text) => setText(text)}
          multiline={true}
          height={height(50)}
        />
      </View>

      <TouchableOpacity>
        <Button mode="contained" onPress={() => console.log("Pressed")}>
          Submit form
        </Button>
      </TouchableOpacity>
    </View>
  );
}
