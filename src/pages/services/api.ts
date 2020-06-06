import axios from "axios";
import { createNativeWrapper } from "react-native-gesture-handler";

const api = axios.create({
  baseURL: "http://192.168.15.48:3333",
});

export default api;
