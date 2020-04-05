import axios from "axios";
import { normalizeRecipientState } from "./data";

axios.defaults.baseURL =
  "https://us-central1-covid-groceries-f59a0.cloudfunctions.net";

export const confirmOrderReq = (state) =>
  axios.post("/confirmOrder", normalizeRecipientState(state));
