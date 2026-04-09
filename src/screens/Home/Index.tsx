import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from "react-native";
import styles from "../Home/Style";
import { Menu } from "../../components/Menu/Index";

export default function Home() {
    return (
        <>
            <View style={styles.container}>
                <Menu />
               <Text>Open up Home.tsx to start working on your app!</Text>
               <StatusBar style="auto" />
                </View>
          
        </>
    )
}