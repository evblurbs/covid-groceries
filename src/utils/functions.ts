import axios from "axios";
import { normalizeRecipientState, normalizeShopperState } from "./data";
import { functionsUrl } from "../configs/firebase";

axios.defaults.baseURL = functionsUrl;

export const confirmOrderReq = (state) =>
  axios.post("/confirmOrder", normalizeRecipientState(state));

export const confirmShopperReq = (state) =>
  axios.post("/confirmShopper", normalizeShopperState(state));
