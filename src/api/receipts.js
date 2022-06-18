import axios from "axios";
import instance from "../axios";

async function fetchAllReceipts(setter) {
  const getReceipts = await instance.get("/");
  setter(getReceipts.data);
}

export { fetchAllReceipts };
