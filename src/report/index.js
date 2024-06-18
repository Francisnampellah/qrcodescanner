import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { height } from "react-native-dimension";
import axios from "axios";

export default function Report({ route, navigation }) {
  const { data } = route.params;

  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`https://elton.donaldtz.com/api/send-fault-report/${data}`, {
        description: text,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setText("");
        navigation.navigate("qrscanner");
      });
  };

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
        <Button mode="contained" onPress={handleSubmit}>
          Submit form
        </Button>
      </TouchableOpacity>
    </View>
  );
}
