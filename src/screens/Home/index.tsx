import React from "react";
import { View, ScrollView, Text } from "react-native";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { styles } from "./styles";

export function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Header></Header>
      </View>
      <View style={styles.search}>
        <Search></Search>
      </View>
    </ScrollView>
  );
}
