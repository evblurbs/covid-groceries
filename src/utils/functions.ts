import axios from "axios";
import { normalizeRecipientState, normalizeShopperState } from "./data";

axios.defaults.baseURL =
  "https://us-central1-covid-groceries-f59a0.cloudfunctions.net";

export const confirmOrderReq = (state) =>
  axios.post("/confirmOrder", normalizeRecipientState(state));

export const confirmShopperReq = (state) =>
  axios.post("/confirmShopper", normalizeShopperState(state));
