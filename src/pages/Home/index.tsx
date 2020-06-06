import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { View, Text, Image, ImageBackground } from "react-native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const navigation = useNavigation();

  function handlerNavigatePoints() {
    navigation.navigate("Points");
  }

  return (
    <ImageBackground
      style={styles.container}
      imageStyle={{ width: 274, height: 368 }}
      source={require("../../assets/home-background.png")}
    >
      <View style={styles.main}>
        <Image source={require("../../assets/logo.png")} />
        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
        </Text>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handlerNavigatePoints}>
          <View style={styles.buttonIcon}>
            <Icon name="arrow-right" color="#FFF" size={24}></Icon>
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

export default Home;
