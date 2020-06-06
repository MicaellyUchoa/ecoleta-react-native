import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import styles from "./styles";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";
import { SvgUri } from "react-native-svg";
const Points = () => {
  const navigation = useNavigation();
  function handlerNavigateBack() {
    navigation.goBack();
  }
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handlerNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <Text style={styles.title}> Bem vindx.</Text>
        <Text style={styles.description}>
          Encontre no mapa um ponto de coleta.
        </Text>
        <View style={styles.mapContainer}>
          <MapView style={styles.map} />
        </View>
      </View>
      <View style={styles.itemsContainer}>
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 20 }}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.15.48:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.15.48:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.15.48:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.15.48:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.15.48:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.15.48:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.15.48:3333/uploads/lampadas.svg"
            />
            <Text style={styles.itemTitle}>Lâmpadas</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};
export default Points;
