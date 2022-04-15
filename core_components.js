import React from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";

export default function core_components() {
  return (
    <ScrollView>
      <Text>Some Text</Text>
      <View>
        Some More text
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2YzdKQRkA5d4SVWaMONwozCvS13LOUJneBclmWBlmPsoOygclmfRtHBWtu6KnMQfC3A&usqp=CAU",
          }}
          style={{ width : 200, height : 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}
